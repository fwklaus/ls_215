// build a function that parses a string of mail data
// takes a string
  // parses it
  // produces two stats
    // number of email messages found in the string
    // date range of the email messages
  
// email string:
  // multiple messages delmited by ##||##
  // each messagee has 5 parts seperated by #|#
  // parts occur in sequence
    // ##||## sender #|# subject #|# date #|# recipient #|# body ##||##

function mailCount(emailData) {
  let messages = emailData.split('##||##');
  let parsedMessages = messages.map(message => message.split('#/#'));
  let dates = [];
  parsedMessages.forEach(message => {
    let date = message[2];
    date = date.replace('\n', '');
    dates.push(date);
  });

  dates = dates.sort(function(a, b) {
    let date1 = new Date(a);
    let date2 = new Date(b);

    return date1 - date2
  })

  dates = dates.map(date => new Date(date).toDateString());

  console.log(`Count of Email: ${messages.length}`)
  console.log(`Date range: ${dates.slice(0, 1)} - ${dates.slice(-1)}`);
}

console.log(mailCount(emailData));

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
