$(document).ready(function () {

    //constantly update current time
    var updateDate = function () {
        var currentDay = moment().format('MMMM Do, YYYY');
        $('#currentDay').text(currentDay);
    }
    //initially set date
    updateDate();

    //timeblock class
    class timeBlock {
        //massage to be stored
        message = "";
        constructor(time) {
            this.time = time;
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
            //create bootstrap icon
            var icon = $('<i>');

            //add class row from css
            row.addClass("row");
            //add classes to hour
            hour.addClass("col col-1 hour");
            //add classes to textarea
            textArea.addClass('col col-10 description');
            //add classes to the button
            saveBtn.addClass('col col-1 saveBtn');
            //add classes to bootstrap icon
            icon.addClass('fas fa-save');

            //add time in the hour column
            hour.text(this.time);
            //add icon  to save button
            saveBtn.append(icon);

            //add color to textarea
            this.#colorTextArea(textArea);

            //append columns to row
            row.append(hour);
            row.append(textArea);

            row.append(saveBtn);


            //append row to container
            $('.container').append(row);

        }

        //method to color the timeblocks appropriately
        #colorTextArea(textarea) {
            //fetch current hour
            var currentHour = moment().hour();
            //store this.time in new var converted to 24hr time
            var newTime = moment(this.time, ["h A"]).format("HH");
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

    //variable to store arrays in local storage
    var hourArr = [nine, ten, eleven, twelve, one, two, three, four, five];
    //get all the timeblocks in one variable
    const allTimeBlocks = document.querySelectorAll('.row');
    console.log(allTimeBlocks);

    //load saved messages from local storage
    $(function loadMessages() {
        //get data from local storage
        var storageSaved = JSON.parse(localStorage.getItem("schedule"));
        //if the key exists
        if (storageSaved !== null) {
            console.log(storageSaved);
            //for loop to traverse every element
            for (var i = 0; i < allTimeBlocks.length; i++) {
                //place data into textarea
                console.log(allTimeBlocks[i]);
                console.log(storageSaved[i]);
                allTimeBlocks[i].childNodes[1].innerHTML = storageSaved[i].message;
            }
        }
    });

    //add click listener to save button
    function addClickToButtons(e) {
        e.preventDefault();
        //get button element
        var btn = $(e.target);
        //get textarea using dom traversal
        var textarea = btn.parent().parent().children(".description");
        console.log(textarea);
        //get content in the textarea
        var content = textarea.val();
        console.log(content);
        //console.log(hourArr);
        //get specific time of target element
        var targetTime = btn.parent().parent().children(".hour").text();
        //console.log(targetTime);
        //traverse whole array of timeblocks to get matching element
        for (var i = 0; i < hourArr.length; i++) {
            //if target time is equal to hourArr[i]
            if (targetTime === hourArr[i].time) {
                //console.log(hourArr[i].time);
                //update content in timeBlock object
                hourArr[i].message = content;
                //console.log(hourArr[i].message);
                //save to local storage
                localStorage.setItem("schedule", JSON.stringify(hourArr));
            }
        }
    }

    $('.row').on("click", ".fas", addClickToButtons);
});