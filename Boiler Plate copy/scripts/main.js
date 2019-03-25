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
        url: 'http://www.omdbapi.com/?apikey=cc45ded&s='
    },
    methods:{
        showTime(date){
            alert(`The time is ${date.toLocaleString()}`)
        },
        toggleTime(){
            this.timeVisible = !this.timeVisible;
        },
        getMovies({
            fetch(this.url + this.searchTerm)
            .then(function(data){
                return data.JSON();
            })
            .then(function(data){
                console.log(data);
            })
        })
    }
    mounted: function(){
        this.time = new Date();
        this.minutes = 60 - Number(this.time.getMinutes());
        this.seconds = 60 - Number(this.time.getSeconds());
        setInterval(()=>{
            this.time = new Date();
            this.date = this.time.toLocaleString();
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