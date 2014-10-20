// Creates a tab group with Titanium.UI API. 
var tabGroup =Titanium.UI.createTabGroup();
 
tabGroup.open();


// Create the window "mainWin" 
var mainWin = Titanium.UI.createWindow ({ 
    title: 'Band Planet',
    backgroundImage: 'images/concert.jpg', 
    url: 'bands.js', // Link to file which will handle the code for the window
   // statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

 
// Create the tab "mainTab" 
var mainTab = Titanium.UI.createTab ({
    title: "Band Planet", 
    icon: 'KS_nav_ui.png', 
    window: mainWin // We will create the window "mainWin" 
});
 
// Add the tab to our tab group 
tabGroup.addTab(mainTab);
tabGroup.open();