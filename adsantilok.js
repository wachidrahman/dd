/*
 * jQuery Anti Adblock
 * @copyright Hendriono http://modification-blog.blogspot.com
 * @version 1.00 (9 Maret 2011)
 */
var standby = false;

function CekBlok() {
    if ($(".adsantilok").height() == "0") {
        TutupHalaman();
    }
}

function TutupHalaman() {
    if (!standby) {
        var h = 0;
        h = jQuery(window).height();
        jQuery("#energysaving").show().css({
            height: "0",
            width: "0",
            left: "50%",
            top: "50%"
        }).animate({
            width: "100%",
            height: h,
            left: "0",
            top: "0",
            opacity: "1"
        }, 1000);
        standby = true;
    }
}
document.write('<link rel="stylesheet" href="'+ linkcss +'" type="text/css">');

function jAntiBlock() {
    jQuery(function () {
        jQuery(document).ready(function () {
            setTimeout("CekBlok();", 1000);
            jQuery("body").append('<div id="energysaving"><p>Whitelisting DroidDosh In Your Ad Blocker <br /><span>Do you like this blog? Keep us running by whitelisting this blog in your ad blocker. This is <a href='http://www.droiddosh.com/p/whitelisting-droiddosh-in-your-ad.html' target='_blank' title='how to whitelisting'>how to whitelisting</a> this blog in your ad blocker.<br/>DroidDosh.com relies on ads and donations to help pay for things like domain. By whitelisting DroidDosh.com in your ad blocking software, you can help support us.<br/>If you prefer not to whitelist us, don't worry, we won't judge. You can always help support us by <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=LQBJC8CHMUXQN" rel="nofollow" target="_blank">making a donation</a>.<br/><br/>' + adminblog + '</span></p><div id="copyrightOnlineLeaf">Copyright 2013 <font style="color: #666666;"> DH</font> - All rights reserved</div></div>');
        });
    });
}
jAntiBlock();