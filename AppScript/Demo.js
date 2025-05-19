/* GetTasks: Given a sheet with tasks ids, it retrieves their info:

| task_id | user_id | title | completed | request_result |
|---------|---------|-------|-----------|----------------|
| 1       |         |       |           |                |
| 2       |         |       |           |                |
| 3       |         |       |           |                |

*/

/* AddTasks: Given a sheet with some tasks info, it simulates their creation:

| user_id | title | completed | task_id | request_result |
|---------|-------|-----------|---------|----------------|
|    1    |   a   |   TRUE    |         |                |
|    2    |   b   |   FALSE   |         |                |
|    3    |   c   |   TRUE    |         |                |

*/

function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('My Script') // Desired menu name in Google Sheets view
      .addItem('Get tasks', 'GetTasks') // (Label in the menu, Function to call in the script)
      .addItem('Add tasks', 'AddTasks')
      .addToUi()
}

function GetTasks() {
  const sheetName = "GetTasks"
  const sheet = SpreadsheetApp.getActive()
  const data = sheet.getSheetByName(sheetName).getDataRange().getValues()

  const taskIdsColumn = 0
  const resultColumn = 4

  for(var i = 1; i < data.length; i++) {
    const taskId = data[i][taskIdsColumn]

    if(data[i][resultColumn] != "") {
      Logger.log(`Task with id ${taskId} was already processed: ${data[i][taskIdsColumn]}`)
      continue
    }

    const payload = getTask(taskId, sheetName, i)

    if(payload) {
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!B${i+1}`).setValue(payload['userId'])
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!C${i+1}`).setValue(payload['title'])
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!D${i+1}`).setValue(payload['completed'])
    }
  }
}

function getTask(taskId, sheetName, lineNumber) {
  const url = `https://jsonplaceholder.typicode.com/todos/${taskId}`
  const headers = {
    'Content-Type': 'application/json'
  }

  try {
    const response = UrlFetchApp.fetch(url, {
      method: 'get',
      headers: headers,
      timeout: 60000, // In milisseconds = 60 seconds
      muteHttpExceptions: true
    })
    const responseCode = response.getResponseCode()
    const responseContent = response.getContentText()

    if(responseCode >= 200 && responseCode < 300) {
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!E${lineNumber+1}`).setValue(`${responseCode} - Successful`)
      return JSON.parse(responseContent)
    } else {
      Logger.log(`Failed to get info for task with id ${taskId}: ${responseCode} - ${responseContent}`)
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!E${lineNumber+1}`).setValue(`${responseCode} - ${responseContent}`)
      return null
    }
  } catch (exception) {
    Logger.log(`Failed to get info for task with id ${taskId}: ${exception}`)
    SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!E${lineNumber+1}`).setValue(`${exception}`)
    return null
  }
}

function AddTasks() {
  const sheetName = "AddTasks"
  const sheet = SpreadsheetApp.getActive()
  const data = sheet.getSheetByName(sheetName).getDataRange().getValues()

  const userIdColumn = 0
  const titleColumn = 1
  const isCompletedColumn = 2

  Logger.log(JSON.stringify(data))

  for(var i = 1; i < data.length; i++) {
    const userId = data[i][userIdColumn]
    const title = data[i][titleColumn]
    const isCompleted = data[i][isCompletedColumn]

    const payload = addTask(userId, title, isCompleted, sheetName, i)

    if(payload) {
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!D${i+1}`).setValue(payload['id'])
    }
  }
}

function addTask(userId, title, completed, sheetName, lineNumber) {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const headers = {
    'Content-Type': 'application/json'
  }
  const body = {
    "userId": userId,
    "title": title,
    "completed": completed
  }

  try {
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      headers: headers,
      payload: JSON.stringify(body),
      muteHttpExceptions: true // Prevent throwing HTTP exceptions for non-200 responses
    })

    const responseCode = response.getResponseCode()
    const responseContent = response.getContentText()

    if(responseCode >= 200 && responseCode < 300) {
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!E${lineNumber+1}`).setValue(`${responseCode} - Successful`)
      return JSON.parse(responseContent)
    } else {
      Logger.log(`Failed to add task from user with id ${userId}: ${responseCode} - ${responseContent}`)
      SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!E${lineNumber+1}`).setValue(`${responseCode} - ${responseContent}`)
      return null
    }
  } catch(exception) {
    Logger.log(`Failed to add task from user with id ${userId}: ${exception}`)
    SpreadsheetApp.getActiveSheet().getRange(`${sheetName}!E${lineNumber+1}`).setValue(`${exception}`)
    return null
  }
}
