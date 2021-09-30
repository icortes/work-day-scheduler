$(document).ready(function () {

    //constantly update current time
    var updateDate = function () {
        var currentDay = moment().format('MMMM Qo, YYYY');
        $('#currentDay').text(currentDay);
    }
    //initially set date
    updateDate();

    var counter = 0;
    //variable to store arrays in local storage
    var hourArr = [nine, ten, eleven, twelve, one, two, three, four, five];

    //timeblock class
    class timeBlock {
        //massage to be stored
        message = "";
        index;
        constructor(time) {
            this.time = time;
        }
        //sets message to the object
        set setMessage(message) {
            this.message = message;
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

            //sets index
            this.index = counter;

            //append columns to row
            row.append(hour);
            row.append(textArea);
            row.append(saveBtn);

            //append row to container
            $('.container').append(row);

            //add click listener to save button
            $("button#btn-" + counter).click(function (event) {
                event.preventDefault();
                //get the value inside textarea
                var message = $("textarea#textarea-" + counter).val();
                console.log(message);
                //grab array of timeBlocks from local storage
                var storedTimes = JSON.parse(localStorage.getItem("hour"));
                console.log(storedTimes);
                //copy our message to the object
                hourArr[this.index].setMessage() = message;
                
                
               
                

            });

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
    var nine = new timeBlock("9 AM");
    var ten = new timeBlock("10 AM");
    var eleven = new timeBlock("11 AM");
    var twelve = new timeBlock("12 PM");
    var one = new timeBlock("1 PM");
    var two = new timeBlock("2 PM");
    var three = new timeBlock("3 PM");
    var four = new timeBlock("4 PM");
    var five = new timeBlock("5 PM")

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