export const fetchMeetups = () =>{
  fetch('http://localhost:4000/meetup/').then(res => res.json())
  console.log('data of respones', fetchMeetups)
}