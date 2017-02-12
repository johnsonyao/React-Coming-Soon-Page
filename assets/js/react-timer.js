var ReactTimer = React.createClass({



 render: function(){
   //Set Go Live Date Time
   var goLiveYear = "2018" //Enter the go live year in YYYY format - e.g. 2018
   var goLiveMonth = "12" //Enter the go live month in MM format  - e.g. 01- Janauary , 12 - December
   var goLiveDate = "20"  //Enter the go live date in DD format - e.g. 01 - 30

   //Get Current Date Time
   var curYear = new Date().getUTCFullYear()
   var curMonth = ("0" + (new Date().getUTCMonth() + 1)).slice(-2)
   var curDate = ("0" + new Date().getUTCDate()).slice(-2)
   //var curHours = ("0" + (new Date().getUTCHours() - 1 )).slice(-2)
   //var curMins = ("0" + new Date().getUTCMinutes()).slice(-2)
   //var curSecs = ("0" + new Date().getUTCSeconds()).slice(-2)




  // var currentDate = curYear + "-" + curMonth + "-" + curDate + "-" + curHours + "-" + curMins + "-" + curSecs
  var currentDate = curYear + "/" + curMonth + "/" + curDate
  var goLiveDate = goLiveYear  + "/" + goLiveMonth + "/" + goLiveDate

 //Date count down to go live
  var currentDateNum = new Date(currentDate)
  var goLiveDateNum = new Date(goLiveDate)
  var timeDiff = Math.abs(goLiveDateNum.getTime() - currentDateNum.getTime())
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))


  return <div>Current datetime is <h3>{currentDate}</h3> <br/> The go live date is <h3>{goLiveDate}</h3><br/>The website will go live in <h3>{diffDays}</h3> days</div>;
 }

});


ReactDOM.render(
  <ReactTimer/>,
  document.getElementById('timer')
);
