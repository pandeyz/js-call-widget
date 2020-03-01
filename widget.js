// Plugin name: widget.js
// Created on: 27-02-2020
// Author: Mayank Pandey (mayankpandey49@gmail.com)
// Purpose: To show a call widget on the webpage where this widget.js file is included
// How to use: Include the widget.js in your page under script tag like <script type="text/javascript" src="path/widget.js"></script>

var widgetConfiguration = {
	widgetText: ' Call',
	bottomMargin: '50px',
	rightMargin: '50px',
	callIcon: '&#x260F;',
	// Url where we manage the impression count by using php or node etc
	imgUrl: '/impressioncount?source=' + location.href + '&referrer=' + document.referrer
};

// To perform some operation when document is loaded
document.addEventListener('DOMContentLoaded', function () {

	// Get the widget html
	var widget = generateWidget();

	document.body.insertAdjacentHTML('beforeend', widget);		// 'beforeend': Just inside the element, after its last child.

	// To handle the click on widget
	document.getElementById("widget_container").addEventListener("click", handleWidgetClick);
});

// To generate the widget html
function generateWidget() {
	// Image that makes a request to some url and that hit will be counted as - No of times (Impressions) widget appears on the website
	// This is one way to manage the impression count, the another way is we can make a XMLHttpRequest every time the plugin loads

	// The image url is also having the website source and referrer in it.
	// To get the information related to source of visitor, web traffic we can use document.referrer
	// It will return the referrer of the current document (If any)

	var img = '<img src="'+ widgetConfiguration.imgUrl +'" height="0" width="0" />';

	// Widget html
	var widget = '<div id="widget_container" style="position:fixed; bottom:'+ widgetConfiguration.bottomMargin +'; right:'+ widgetConfiguration.rightMargin +'; background: #960a9d; border-radius: 50px; padding: 10px 25px 10px 24px; color: #fff; font-size: 16px;">'+ img + widgetConfiguration.callIcon + widgetConfiguration.widgetText +'</div>';
	
	// Return the html
	return widget;
}

// To handle click event on widget
function handleWidgetClick() {
	console.log('Widget is clicked on ' + window.location.href);

	// Here we can make a http request to the server on every click and that will increase the count on every request
	/*
	/ const http = new XMLHttpRequest()
	/ http.open("GET", "url");
	/ http.send();
	*/
}