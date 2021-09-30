$(document).ready(function () {

    console.log(moment());
    console.log(moment().format());

    //constantly update current time
    var updateDate = function () {
        var currentDay = moment().format('MMMM Qo, YYYY');
        $('#currentDay').text(currentDay);
    }
    //initially set date
    updateDate();

    //timeblock class
    class timeBlock {
        //massage to be stored
        message="";
        constructor(time) {
            this.time = time;
        }
        //sets message to the object
        set setMessage(message){
            this.message = message;
        }
        //will make a new row for the table
        makeTimeBlock() {

            //make a new <div>
            var row = $('<div>');
            //make column for time
            var hour = $('<div>');
            //make column for textarea
            var textArea = $('<textarea>');
            //make column for save button
            var saveBtn = $('<button>');

            //add class row from css
            row.addClass("row");
            //add classes to hour
            hour.addClass("col col-1 hour");
            //add classes to textarea
            textArea.addClass('col col-10 description');
            //add classes to the button
            saveBtn.addClass('col col-1 saveBtn');

            //add time in the hour column
            hour.text(this.time);
            //add 💾 to save button
            saveBtn.text('💾');

            //append columns to row
            row.append(hour);
            row.append(textArea);
            row.append(saveBtn);

            //append row to container
            $('.container').append(row);
        }

        //method to color the timeblocks appropriately
        #colorRow(row){
            //fetch current hour
            var currentHour = moment().hour();
        }

    }
    //create timeblocks
    var nine = new timeBlock("9 AM");
    var ten = new timeBlock("10 AM");
    var eleven = new timeBlock("11 AM");
    var twelve = new timeBlock("12 PM");
    var one = new timeBlock("1 PM");
    var two = new timeBlock("2 PM");
    var three = new timeBlock("3 PM");
    var four = new timeBlock("4 PM");
    var five = new timeBlock("5 PM")
    console.log(nine);

    //call makeTimeBLock() to each object
    nine.makeTimeBlock();
    ten.makeTimeBlock();
    eleven.makeTimeBlock();
    twelve.makeTimeBlock();
    one.makeTimeBlock();
    two.makeTimeBlock();
    three.makeTimeBlock();
    four.makeTimeBlock();
    five.makeTimeBlock();
});