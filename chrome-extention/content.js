var level = 4 // 0 < level < 4
var count = 200 
for(let i = 0; i < document.getElementsByClassName("ContributionCalendar-day").length ;i++){
    document.getElementsByClassName("js-calendar-graph-svg")[0].getElementsByClassName("ContributionCalendar-day")[i].setAttribute("data-level",level)//CONTRIBUTION LEVEL 
    document.getElementsByClassName("js-calendar-graph-svg")[0].getElementsByClassName("ContributionCalendar-day")[i].setAttribute("data-count",count)//CONTRIBUTION COUNT
}
