for(let i = 0; i < document.getElementsByClassName("ContributionCalendar-day").length ;i++){
    console.log(document.getElementsByClassName("ContributionCalendar-day")[i].getAttribute("data-level"))
    document.getElementsByClassName("js-calendar-graph-svg")[0].getElementsByClassName("ContributionCalendar-day")[i].setAttribute("data-level",4)
document.getElementsByClassName("js-calendar-graph-svg")[0].getElementsByClassName("ContributionCalendar-day")[i].setAttribute("data-count",4)

}