import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './news.css';
// import { networkInterfaces } from 'os';
import axios from "axios";

function News(props) {
    return (
        axios.get('https://newsapi.org/v2/top-headlines?sources=fox-sports,nfl-news,espn&q=NFL&sortBy=publishedAt&excludeDomains=go.com&apiKey=d81fe369bb314647a9d2391f6765100f')
   .then(function (response) {
    console.log(response);
  })
  );
}

// $('body').on('click', '#news-btn', function () {
    // var queryURL = "";

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"

//     }).then(response => {
//       //console.log(response);
//       console.log(queryURL);
//       news.push(response);
//       $("#newsTable").empty();
//       for (var i = 0; i < news[0].articles.length; i++) {
//         var headline = news[0].articles[i].description
//         var newsUrl = news[0].articles[i].url
//         console.log(headline);
//         console.log(newsUrl);
//         var newTr = $("#newsTable");

//         var html = '';
//         html += "<tr>";
//         html += "<td> " + headline + "</td>";
//         html += "</tr>";
//         html += "<tr>";
//         html += "<td>" + '<a href="' + newsUrl + '">Link' + "</a>" + "</td>";

//         html += "</tr>";
//         newTr.append(html);
//       }

//     });

//   });
// <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

export default news;