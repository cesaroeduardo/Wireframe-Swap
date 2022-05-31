// Wireframe Components
const RTM_HEADER = figma.importComponentByKeyAsync('40d7d43f0803aabfea1500437b80fdc73fe22277')
const RTM_SUBHEADER = '0cf61c7c4e2b65694bee96e1d165ae2c2c83158c'

// RTM Components
const WIRE_HEADER = '40d7d43f0803aabfea1500437b80fdc73fe22277'
const WIRE_SUBHEADER = '7063d64ee203a335707c02133f915c4f66531a23'

// Close the plugin when there is no selection
if (!figma.currentPage.selection.length) {
  figma.closePlugin('Please select a component instance and try');
}

// TRY 3
// Swap Header
var mySelection = figma.currentPage.selection.find(node => node.type == "INSTANCE" && node.name == "Header")
async function swapHeader(mySelection){
    switch(mySelection.mainComponent.key) {
    case RTM_HEADER:
    if (figma.command == "rtm")
        {
            mySelection.swapComponent(RTM_HEADER)
        }
    }
}

//// TRY 2
// Swap Header
// async function swapHeaders(header){
//     switch(header.mainComponent.key) {
//     case RTM_HEADER:
//     if (figma.command == "rtm")
//         {
//             figma.currentPage.selection[0].swapComponent(await figma.importComponentByKeyAsync(RTM_HEADER))
//         }
//     }
// }


//// TRY 1
// async function swapHeaders(header) {
//     switch(header.mainComponent.key) {
//     case WIRE_HEADER:
//     case RTM_HEADER:
//     if (figma.command == "rtm") {
//         header.swapComponent(await figma.importComponentByKeyAsync(RTM_HEADER))
//         figma.closePlugin('✅ Success!');
//     } else if (figma.command == "wireframe") {
//         header.swapComponent(await figma.importComponentByKeyAsync(WIRE_HEADER))
//         figma.closePlugin('✅ Success!');
//      }
//     break
// }
// }

// Check Selection is a Header Component
if (figma.command == "header") {
  if (figma.currentPage.selection.find(node => node.type == "INSTANCE" && node.name == "Header")) {
      // firstSelected.swapComponent(figma.importComponentByKeyAsync(RTM_HEADER));
      figma.closePlugin('✅  This is a Header!');
    }
    else 
      figma.closePlugin('❌  This is not a Header!');
}