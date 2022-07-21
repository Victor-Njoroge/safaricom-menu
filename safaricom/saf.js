
var option=parseInt(prompt("0:Nyakua Bonus\n1:My Data Deals\n2:Daily Bundles NEW\n3:Weekly Bundles NEW\n4:Monthly" +
    " Bundles NEW\n5:No Expiry Bundles\n6:Entertainment Bundles\n7:Okoa Data\n8:Lipa Mdogo Mdogo\n98:MORE"));
if(option===0){
    var option2=parseInt(prompt("1:Buy Nyakua Bundles\n2:Check My Target\n3:Check my daily usage\n4:Check" +
        "my FREE Data Balance\n5:Join Data Bonus\n6:Opt Out\n7:How it works\n0:BACK 00:HOME"));
    if (option2===1){
        alert("you have successfully subscribed");
    }else if (option2===2){
        alert("you have successfully subscribed");
    }else if (option2===3){
        alert("you have successfully subscribed");
    }else if (option2===4){
        alert("you have successfully subscribed");
    }else if (option2===5){
        alert("you have successfully subscribed");
    }else if (option2===6){
        alert("you have successfully subscribed");
    }else if (option2===7){
        alert("you have successfully subscribed");
    }else{
        alert("invalid MMI code")
    }
}else if (option===1){
    var option2=parseInt(prompt("1:Sh10=750MB for Ihr\n2:Sh35=325MB for 24hr\n3:Sh250=2GB for 30 Days" +
        "\n4:Sh500=5GB for 30 Days\n5:Sh 1000=30GB for 30 Days(1GB/Day)\n6:Hot Deals(Tunukiwa)"));
    if (option2===1){
        alert("You have successfully purchased bundles worth 750MB for 1hr");
    }else if(option2===2){
       alert("You have successfully purchased bundles worth 325 MB for 24hrs") ;
    }else if(option2===3){
    alert("You have successfully purchased bundles worth 2GB for 1month");
    }else if(option2===4){
        alert("You have successfully purchased bundles worth 5GB for 1month");
    }else if(option2===5){
        alert("You have successfully purchased bundles worth 30GB for 1month");
    }else if(option2===6){
        alert("You have successfully subscribed to Tunukiwa deals");
    }else{
        alert("Invalid MMI code");
    }

} else if (option===2){
    var option2=parseInt(prompt("1:Buy For My Number\n2:Buy for Other Number\n3:Stop Autorenew\n0:BACK" +
        " 00:HOME"));
}else if (option===3){
    var option2=parseInt(prompt("1:Buy For My Number\n2:Buy for Other Number\n3:Stop Autorenew\n0:BACK" +
        " 00:HOME"));
}else if (option===4){
    var option2=parseInt(prompt("1:Buy For My Number\n2:Buy for Other Number\n3:Stop Autorenew\n0:BACK" +
        " 00:HOME"));
}else if (option===5){
    var option2=parseInt(prompt("1:Buy For My Number\n2:Buy for Other Number\n3:Stop Autorenew\n0:BACK" +
        " 00:HOME"));
}else if(option===6){
    var option2=parseInt(prompt("0:Unlock Baze Bonus\n1:Youtube\n2:Showmax\n3:Baze Video\n4:Baze Music" +
        "\n5:Angaza \n6:K24 Live\n7:Viusasa\n8:Education Bundle\n9:Unsubscribe\n00:HOME"));
}else if (option===7){
    var option2=parseInt(prompt("Bundles valid for 24 hrs\n1:Okoa 270MB for Sh50\n2:Okoa 90MB for Sh20" +
        "\n3:Okoa 30MB for Sh10\n4:Okoa 10MB for Sh5\n0:BACK"));
}else if(option===8){
    var option2=parseInt(prompt("Want to join Lipa Mdogo Mdogo? Great!\nReview the terms of service at\n" +
        "www.safaricom.co.ke\n1:Accept\n2:Reject\n3:Pay for another"));
}else if(option===98){
    var option2=parseInt(prompt("9:Balance & Tips\n10:Calls & SMS\n11:Buy Newspaper\n12:Sambaza Internet\n" +
        "13:Is My Sim 4G Enabled?\n0:BACK"));
}else{
    alert("Wrong MMI code Please try again");
}