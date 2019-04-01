var date = new Date();
const countDownApp = new Vue({
    el: '#countDown',
    data: {
        time: " ",
        appName: 'The Final Countdown',
        minutes: ' ',
        seconds: ' ',
        timeVisible: true,
        searchTerm: ' ',
        url: 'http://www.omdbapi.com/?apikey=cc45ded&s=',
        arr: ["Paul", "Bre", "Jamie", "Ally", "Trish"],
        moviesArray: []
    },
    methods:{
        getMovies(){
            fetch(this.url + this.searchTerm)
            .then((data)=>{
                return data.json();
            })
            .then((data)=>{
                this.moviesArray = data.search;
                console.log(data);
            })
        },
        showTime(date){
            alert(`The time is ${date.toLocaleString()}`)
        },
        toggleTime(){
            this.timeVisible = !this.timeVisible;
        }
        },
    mounted: function() {
        this.time = new Date();
        this.hours = 23 - Number(this.time.getHours());
        this.minutes = 59 - Number(this.time.getMinutes());
        this.seconds = 59 - Number(this.time.getSeconds());
        setInterval(function(){
            this.time = new Date();
            this.hours = 23 - Number(this.time.getHours());
            this.minutes = 59 - Number(this.time.getMinutes());
            this.seconds = 59 - Number(this.time.getSeconds());
        },1000);
    }
});


/*const student = {
    name: "Paul",
    gpa: 4.5
};
*/