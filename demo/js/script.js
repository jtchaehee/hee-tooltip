/*
 * File       : js/script.js
 * Author     : STUDIO-JT (HEE)
 * Guideline  : JTstyle.1.0
 *
 * SUMMARY:
 * 1) 
 * 2)
 * 3) 
 */


jQuery(function($) {

hee_tooltip();

function hee_tooltip(){
	
    $('.default').hee_tooltip();

    $('.custom').hee_tooltip({
        backgroundColor: '#e9e9e9',
        color: '#0b21ee'
    });
	
}
	
})
