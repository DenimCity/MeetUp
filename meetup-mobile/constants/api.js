import axios from 'axios'
export const fetchMeetups = () =>{

  axios
      .get('http://10.1.6.50:4000/meetup/')
      .then(response => {
        const meetups = response.data
        console.log('data from server ', meetups);
        return meetups
      })

  // fetch('http://10.1.6.50:4000/meetup/').then(res => res.json())
  // console.log('data of respones', fetchMeetups)
}