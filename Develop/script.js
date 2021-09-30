$(document).ready(function () {

    //constantly update current time
    var updateDate = function () {
        var currentDay = moment().format('MMMM Qo, YYYY');
        $('#currentDay').text(currentDay);
    }
    //initially set date
    updateDate();
    //counter for id names
    var counter = 0;

    //timeblock class
    class timeBlock {
        //massage to be stored
        message = "";
        index = 0;
        constructor(time, index) {
            this.time = time;
            this.index = index;
        }
        //get index
        get getIndex() {
            return this.index;
        }
        //sets the index of the timeBlock object
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

            //add custom id to textarea
            textArea.attr('id', 'textarea-' + counter);
            //add custom id to button
            saveBtn.attr('id', 'btn-' + counter);

            //add time in the hour column
            hour.text(this.time);
            //add 💾 to save button
            saveBtn.text('💾');

            //add color to textarea
            this.#colorTextArea(textArea);

            //append columns to row
            row.append(hour);
            row.append(textArea);
            row.append(saveBtn);

            //append row to container
            $('.container').append(row);

            counter++;
        }

        //method to color the timeblocks appropriately
        #colorTextArea(textarea) {
            //fetch current hour
            var currentHour = moment().hour();
            //store this.time in new var converted to 24hr time
            var newTime = moment("1 PM", ["h A"]).format("HH");
            //if this.time is less than currentHour
            if (newTime < currentHour) {
                //add class 'past' to row
                textarea.addClass("past");
            }
            //if this.time is equal to currentHour
            else if (newTime == currentHour) {
                //add class 'present' to row
                textarea.addClass("present");
            }
            //else add class 'future'
            else {
                textarea.addClass("future");
            }
        }

    }
    //create timeblocks
    var nine = new timeBlock("9 AM", 0);
    var ten = new timeBlock("10 AM", 1);
    var eleven = new timeBlock("11 AM", 2);
    var twelve = new timeBlock("12 PM", 3);
    var one = new timeBlock("1 PM", 4);
    var two = new timeBlock("2 PM", 5);
    var three = new timeBlock("3 PM", 6);
    var four = new timeBlock("4 PM", 7);
    var five = new timeBlock("5 PM", 8)

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

    //variable to store arrays in local storage
    var hourArr = [nine, ten, eleven, twelve, one, two, three, four, five];

    //add click listener to save button
    function addClickToButton(time) {
        $("button#btn-" + time.getIndex).click(function (event) {
            event.preventDefault();
            console.log(time.getIndex);
            //get the value inside textarea
            var message = $("textarea#textarea-" + time.getIndex).val();
            console.log(message);
            //grab array of timeBlocks from local storage
            var storedTimes = JSON.parse(localStorage.getItem("workHours"));
            console.log(storedTimes);
           //if storedTines has content
            if(storedTimes !== null){
            //copy our message to the object
            hourArr[time.getIndex].message = message;
            }
            //if not copy the hoursArr into storedTimes
            else{
                hourArr[time.getIndex].message = message;
                storedTimes = hourArr;
            }
            //store our updated array in local storage
            localStorage.setItem("workHours",JSON.stringify(hourArr));
        });
    }

    addClickToButton(nine);

});