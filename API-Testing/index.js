const url = "https://intranet.tam.ch/ksh/timetable/classbook";

async function getData() {
    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
        console.log("Response Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();
