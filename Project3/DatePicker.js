'use strict';

class DatePicker{
    constructor(id, callback){
        this.id = id;
        this.callback = callback;
        this.months = ["January", "February","March", "April","May", "June", "July", "August", "September",
            "October","November","December"];
        this.week = ["Su", "Mo","Tu","We","Th","Fr","Sa"];
    }
    render(date){
        var elem = document.getElementById(this.id);
        var table = document.createElement("table");
        var thead = table.createTHead();
        var tbody = table.createTBody();

        var monthYear = thead.insertRow(0);
        var changer = thead.insertRow(1);
        var dayNames = thead.insertRow(2);

        var title = monthYear.insertCell(0);
        title.innerHTML = "   "+ this.months[date.getMonth()] + "   " + date.getFullYear();
        title.colSpan = "7 ";
        title.setAttribute("class", "title");

        var prevYear = changer.insertCell(0);
        prevYear.innerHTML = "<<";
        prevYear.setAttribute("class","previousYear");
        prevYear.addEventListener("click", () => {
          table.remove();
          date.setYear(date.getFullYear() - 1);
          this.render(date);
        });

        var prevMonth = changer.insertCell(1);
        prevMonth.innerHTML = "<";
        prevMonth.setAttribute("class","previousMonth");
        prevMonth.addEventListener("click", () => {
                table.remove();
                date.setMonth(date.getMonth() - 1);
                console.log(date);
                this.render(date);
            });

        var today = changer.insertCell(2);
        today.innerHTML = "Today";
        today.setAttribute("class","title");
        today.colSpan = "3";

        var nextMonth = changer.insertCell(3);
        nextMonth.innerHTML = ">";
        nextMonth.setAttribute("class","nextMonth");
        nextMonth.addEventListener("click", () => {
          table.remove();
          date.setMonth(date.getMonth() + 1);
          this.render(date);
        });

        var nextYear = changer.insertCell(4);
        nextYear.innerHTML = ">>";
        nextYear.setAttribute("class","nextYear");
        nextYear.addEventListener("click", () => {
          table.remove();
          date.setYear(date.getFullYear() + 1);
          this.render(date);
        });
        for (var i = 0; i < 7; ++ i) {
            var th = document.createElement('th');
            th.innerHTML = this.week[i];

            dayNames.appendChild(th);
            //var twoChar = dayNames.insertCell(i);
            //twoChar.innerHTML = this.week[i];
            
        }

        i = 0;
        var start = new Date(date.getFullYear(), date.getMonth(), 1);
        var currentDate = new Date(start.getTime());
        currentDate.setDate(-start.getDay() + 1);
        var now = new Date();
                             
        while(true){
            var row = tbody.insertRow(i);
            row.setAttribute("class","days");
            i = i + 1;
            for(var j = 0; j < 7; j++){
                var day = row.insertCell(j);
                day.innerHTML = currentDate.getDate();
                if(j%7 === 0 || j%7 === 6){
                        day.setAttribute("class","weekend");
                    }
                if(currentDate.getMonth() === date.getMonth()){
                    if(currentDate.getDate() === now.getDate() && now.getMonth() === currentDate.getMonth() && now.getFullYear
                        () === currentDate.getFullYear()){
                        day.setAttribute("class","today");
                    }
                     let ob = {
                            month: currentDate.getMonth() + 1,
                            day: day.innerHTML,
                            year: currentDate.getFullYear()
                        };

                        //console.log(day);
                    day.addEventListener("click",function(){
                        var select = document.getElementsByClassName("selected");
                        //console.log(select);
                            for (var i = 0; i < select.length; i++) {
                                select[0].classList.remove("selected");
                            }
                        //console.log(this);
                        this.setAttribute("class","selected");
                        
                    });
                    day.addEventListener("click",()=>{this.callback(this.id, ob);}
                    );
                    /*()=>{this.callback(this.id, ob);} ,*/
                }
                else{
                    if(j%7 === 0 || j%7 === 6){
                        day.setAttribute("class","otherWeekendDay");
                    }
                    else {day.setAttribute("class","otherDay");}
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            if (currentDate.getMonth() !== date.getMonth()) {
                break;
            }
        }  
        elem.appendChild(table);  
    }         
}