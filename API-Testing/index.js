const url = "https://intranet.tam.ch/ksh/timetable/classbook"


async function getData() {
    const response = await fetch(url)
    console.log(response)
}

getData()