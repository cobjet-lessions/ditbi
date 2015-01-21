var _colorz = (function () {
return {"_ambers":{"$amber":"#FF9900","$amberDark":"#995C00","$amberDarker":"#4C2E00","$amberLight":"#FFC266","$amberLighter":"#FFD699","$amberDull":"#D68E22","$amberDuller":"#B38642","$amberBright":"#FFB84D","$amberBrighter":"#FFD391"},"_blues":{"$blue":"#0066FF","$blueDark":"#003D99","$blueDarker":"#002966","$blueLight":"#4D94FF","$blueLighter":"#80B2FF","$blueDull":"#0066CC","$blueDuller":"#336699","$blueBright":"#3399FF","$blueBrighter":"#70B8FF","$blueAirforce":"#5d8aa8","$blueAzure":"#007fff","$blueBaby":"#89cff0","$blueFrench":"#318ce7","$blueCeleste":"#b2ffff","$blueColumbia":"#75b2dd","$blueSky":"#73c2fb","$blueMidnight":"#191970","$blueNavy":"#000080","$blueRoyal":"#4169e1","$blueSapphire":"#0f52ba","$blueSteel":"#4682b4","$blueBehance":"#053eff","$blueDropbox":"#3d9ae8","$blueFacebook":"#3b5998","$blueFlickr":"#0063dc","$blueFoursquare":"#25a0ca","$blueLinkedIn":"#0e76a8","$blueRdio":"#008fd5","$blueSkype":"#00aff0","$blueTwitter":"#00a0d1","$blueVimeo":"#86c9ef","$blueVirb":"#06afd8"},"_bootstrap":{"$black":"#000","$grayDarker":"#222","$grayDark":"#333","$gray":"#555","$grayLight":"#999","$grayLighter":"#eee","$white":"#fff","$blueBoot":"#049cdb","$blueDarkBoot":"#0064cd","$greenBoot":"#46a546","$redBoot":"#9d261d","$yellowBoot":"#ffc40d","$orangeBoot":"#f89406","$pinkBoot":"#c3325f","$purpleBoot":"#7a43b6","$linkColor":"#08c","$tableBackgroundAccent":"#f9f9f9","$tableBackgroundHover":"#f5f5f5","$btnInfoBackground":"#5bc0de","$btnInfoBackgroundHighlight":"#2f96b4","$btnSuccessBackground":"#62c462","$btnSuccessBackgroundHighlight":"#51a351","$btnDangerBackground":"#ee5f5b","$btnDangerBackgroundHighlight":"#bd362f","$btnInverseBackground":"#444","$inputBorder":"#ccc","$dropdownDividerTop":"#e5e5e5","$navbarText":"#777","$navbarInverseBackground":"#111111","$navbarInverseBackgroundHighlight":"#222222","$navbarInverseBorder":"#252525","$paginationBorder":"#ddd","$warningText":"#c09853","$warningBackground":"#fcf8e3","$errorText":"#b94a48","$errorBackground":"#f2dede","$successText":"#468847","$successBackground":"#dff0d8","$infoText":"#3a87ad","$infoBackground":"#d9edf7"},"_browns":{"$brown":"#663300","$brownDark":"#472400","$brownDarker":"#331A00","$brownLight":"#754719","$brownLighter":"#855C33","$brownDull":"#664728","$brownDuller":"#5E4C3A","$brownBright":"#993300","$brownBrighter":"#A34719","$brownBeaver":"#9f8170","$brownBistre":"#3d2b1f","$brownBole":"#79443b","$brownBronze":"#cd7f32","$brownBurnt":"#8a3324","$brownCamel":"#c19a6b","$brownChestnut":"#954535","$brownChocolate":"#7b3f00","$brownCoffee":"#6f4e37","$brownCopper":"#b87333","$brownMahogany":"#c04000","$brownSepia":"#704214"},"_grays":{"$grayAsh":"#b2beb5","$grayBattleship":"#848482","$grayCadet":"#91a3b0","$grayCharcoal":"#36454f","$grayCool":"#8c92ac","$grayGunmetal":"#423732","$graySilver":"#c0c0c0","$graySlate":"#708090","$grayTaupe":"#8b8589","$grayTimberwolf":"#dbd7d2"},"_greens":{"$green":"#33CC33","$greenDark":"#1F7A1F","$greenDarker":"#0F3D0F","$greenLight":"#5CD65C","$greenLighter":"#85E085","$greenDull":"#009933","$greenDuller":"#428057","$greenBright":"#66FF33","$greenBrighter":"#99FF66","$greenApple":"#8db600","$greenAsparagus":"#7ba05b","$greenOlive":"#556b2f","$greenFern":"#4f7942","$greenForest":"#228b22","$greenHunter":"#355e3b","$greenMint":"#3eb489","$greenOffice":"#008000","$greenSea":"#2e8b57","$greenSpring":"#a7fc00","$greenTeal":"#008080","$greenEvernote":"#5ba525","$greenForrst":"#5b9a68","$greenGroupon":"#82b548","$greenKickstarter":"#87c442","$greenNvidia":"#76b900","$greenSpotify":"#81b71a","$greenZerply":"#9dcc7a"},"_limes":{"$lime":"#B8E62E","$limeDark":"#7A991F","$limeDarker":"#3D4C0F","$limeLight":"#D6FF5C","$limeLighter":"#E0FF85","$limeDull":"#A6C44B","$limeDuller":"#94A856","$limeBright":"#BFFF00","$limeBrighter":"#D7FF5E"},"_oranges":{"$orange":"#FF6600","$orangeDark":"#993D00","$orangeDarker":"#4C1F00","$orangeLight":"#FF944D","$orangeLighter":"#FFC299","$orangeDull":"#C96B2C","$orangeDuller":"#A16740","$orangeBright":"#FF9933","$orangeAmazon":"#e47911","$orangeBlogger":"#fc4f08","$orangeGrooveshark":"#f77f00","$orangeHackerNews":"#ff6600","$orangeSoundCloud":"#ff7700","$orangeUbuntu":"#dd4814"},"_peaches":{"$peach":"#FF5050","$peachDark":"#993030","$peachDarker":"#4C1818","$peachLight":"#FF9696","$peachLighter":"#FFCACA","$peachDull":"#D67272","$peachDuller":"#BA8C8C","$peachBright":"#FF9C9C","$peachBrighter":"#FFBFBF"},"_pinks":{"$pink":"#FF33CC","$pinkDark":"#B2248F","$pinkDarker":"#661452","$pinkLight":"#FF5CD6","$pinkLighter":"#FF85E0","$pinkDull":"#CC3399","$pinkDuller":"#993366","$pinkBright":"#FF66CC","$pinkBrighter":"#FF99CC","$pinkAmaranth":"#e52b50","$pinkBrink":"#fb607f","$pinkCarmine":"#960018","$pinkCarnation":"#ffa6c9","$pinkCerise":"#de3163","$pinkCoral":"#f88379","$pinkDeep":"#ff1493","$pinkFandago":"#b53389","$pinkRose":"#f64a8a","$pinkFuchsia":"#ff00ff","$pinkHot":"#ff69b4","$pinkMagenta":"#ff0090","$pinkRuby":"#e0115f","$pinkSalmon":"#ff91a4","$pinkDribbble":"#ea4c89","$pinkFlickr":"#ff0084"},"_preboot":{"// Preboot Colours http":"//getpreboot.com/","$black10":"#e6e6e6","$black20":"#cccccc","$black30":"#b3b3b3","$black40":"#999999","$black50":"#808080","$black60":"#666666","$black70":"#4d4d4d","$black80":"#333333","$black90":"#191919","$bluePrimary":"#428bca","$greenSuccess":"#5cb85c","$yellowWarning":"#f0ad4e","$redDanger":"#d9534f","$blueInfo":"#5bc0de"},"_purples":{"$purple":"#9966FF","$purpleDark":"#5C3D99","$purpleDarker":"#2E1F4C","$purpleLight":"#AD85FF","$purpleLighter":"#C2A3FF","$purpleDull":"#957BC7","$purpleDuller":"#9589AD","$purpleBright":"#9933FF","$purpleBrighter":"#AD5CFF","$purpleAmethyst":"#9966cc","$purpleCerise":"#de3163","$purpleFandango":"#b53389","$purpleHeliotrope":"#df73ff","$purpleLavendar":"#b57edc","$purpleMagenta":"#ff0090","$purpleOrchid":"#da70d6","$purplePlum":"#8e4585","$purpleHeroku":"#6567a5","$purpleYahoo":"#720e9e"},"_reds":{"$red":"#D42C2C","$redDark":"#7A0000","$redDarker":"#3D0000","$redLight":"#DB4D4D","$redLighter":"#F0B2B2","$redDull":"#993333","$redDuller":"#824D4D","$redBright":"#FF0000","$redBrighter":"#FF6E6E","$redAuburn":"#a52a2a","$redBurgundy":"#9f1d35","$redChestnut":"#9a1a00","$redCrimson":"#dc143c","$redBrick":"#b22222","$redWood":"#ab4e52","$redRust":"#b7410e","$redWine":"#722f37","$redGoogle":"#db4a39","$redLastfm":"#c3000d","$redPinterest":"#c8232c","$redYouTube":"#c4302b"},"_tans":{"$tan":"#FFCC99","$tanDark":"#997A5C","$tanDarker":"#4C3D2E","$tanLight":"#FFD6AD","$tanLighter":"#FFE0C2","$tanDull":"#C7925D","$tanDuller":"#A67544","$tanBright":"#FF9966","$tanBrighter":"#FFC2A3"},"_turquoise":{"$turquoise":"#48E8C8","$turquoiseDark":"#00997A","$turquoiseDarker":"#006652","$turquoiseLight":"#6BE8CF","$turquoiseLighter":"#8EE8D6","$turquoiseDull":"#52CCB4","$turquoiseDuller":"#69B8A8","$turquoiseBright":"#00FFCC","$turquoiseBrighter":"#80FFE6"},"_whites":{"$whiteAntiflash":"#f2f3f4","$whiteAntique":"#faebd7","$whiteBeige":"#f5f5dc","$whiteBlond":"#faf0be","$whiteCornsilk":"#fff8dc","$whiteCosmic":"#fff8e7","$whiteCream":"#fffdd0","$whiteEggshell":"#f0ead6","$whiteFloral":"#fffaf0","$whiteHoneydew":"#f0fff0","$whiteIsabelline":"#f4f0ec","$whiteNavajo":"#ffdead","$whitePearl":"#eae0c8","$whiteVanilla":"#f3e5ab","$whiteSmoke":"#f5f5f5"},"_yellows":{"$yellow":"#FFCC00","$yellowDark":"#806600","$yellowDarker":"#332900","$yellowLight":"#fdfc8f","$yellowLighter":"#FFEB99","$yellowDull":"#CFB036","$yellowDuller":"#B39F52","$yellowBright":"#FFFF00","$yellowBrighter":"#FFFF66","$yellowBuff":"#f0dc82","$yellowGold":"#ffd700","$yellowGoldmetal":"#d4af37","$yellowJasmine":"#f8de7e","$yellowMaize":"#fbec5d","$yellowSaffron":"#f4c430","$yellowSunglow":"#ffcc33"}};
})();