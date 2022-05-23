// Wireframe Components
const RTM_HEADER = '0441f7dd0ae9cf65b43211973a32708970e56223'
const RTM_SUBHEADER = '0cf61c7c4e2b65694bee96e1d165ae2c2c83158c'

// RTM Components
const WIRE_HEADER = '40d7d43f0803aabfea1500437b80fdc73fe22277'
const WIRE_SUBHEADER = '7063d64ee203a335707c02133f915c4f66531a23'

// Close the plugin when there is no selection
if (!figma.currentPage.selection.length) {
  figma.closePlugin('Select a Wireframe component to swap');
}

// Check Selection is a Valid Component
var firstSelected = figma.currentPage.selection[0]
if (figma.currentPage.selection.find(node => node.type == "INSTANCE" && node.name == "Header")) {
    // firstSelected.swapComponent(figma.importComponentByKeyAsync(RTM_HEADER));
    figma.closePlugin('Success!');
  }
  else 
    figma.closePlugin('Select a Wireframe to swap to High Fidelity');