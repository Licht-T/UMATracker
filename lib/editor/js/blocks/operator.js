Blockly.Blocks['img_gray_absdiff'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("img1")
			.setCheck("Image_GRAY")
			.appendField("img1").setAlign(Blockly.ALIGN_RIGHT);
		this.appendDummyInput()
			.appendField('absdiff')
			.setAlign(Blockly.ALIGN_CENTER)
			this.appendValueInput("img2")
			.setCheck("Image_GRAY")
			.appendField("img2").setAlign(Blockly.ALIGN_RIGHT);
		this.setOutput(true, "Image_GRAY");
		this.setTooltip('');
	}
};
Blockly.Python['img_gray_absdiff'] = function(block) {
	var value_img1 = Blockly.Python.valueToCode(block, 'img1', Blockly.Python.ORDER_ATOMIC);
	var value_img2 = Blockly.Python.valueToCode(block, 'img2', Blockly.Python.ORDER_ATOMIC);
	// TODO: Assemble Python into code variable.
	var code = 'cv2.absdiff({0},{1})'.format(value_img1,value_img2);
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['im_mask'] = {
    init: function() {
	this.setHelpUrl('http://www.example.com/');
	this.setColour(330);
	this.appendValueInput("im_origin")
	    .appendField("origin image");
	this.appendValueInput("im_mask")
	    .appendField("mask image");
	this.setOutput(true);
	this.setTooltip('');
    }
};

Blockly.Python['im_mask'] = function(block) {
    var value_im_origin = Blockly.Python.valueToCode(block, 'im_origin', Blockly.Python.ORDER_ATOMIC);
    var value_im_mask = Blockly.Python.valueToCode(block, 'im_mask', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'cv2.max({0},{1})'.format(value_im_origin,value_im_mask);
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};


