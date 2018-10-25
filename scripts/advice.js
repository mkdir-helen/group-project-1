// {
//     "slip":
//     {
//         "advice": "True happiness always resides in the quest.",
//             "slip_id": "9"
//     }
// }


function adviceSlip() {
    fetch('http://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => data.slip.advice)
}
adviceSlip();