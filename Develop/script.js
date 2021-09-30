$(document).ready(function() {

    console.log(moment());
    console.log(moment().format());

    //constantly update current time
    var updateDate = function(){
        var currentDay = moment().format('MMMM Qo, YYYY');
        $('#currentDay').text(currentDay);
    }
    //initially set date
    updateDate();
    
    //timeblock class
    class timeBlock{
        constructor(time){
            this.time = time;
        }

        get getTime(){
            return this.time;
        }
        //will make a new row for the table
        makeTimeBlock(){
            
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
    }
    //create timeblocks
    var nineAM = new timeBlock("9 AM");
    console.log(nineAM);
    
    nineAM.makeTimeBlock();
});