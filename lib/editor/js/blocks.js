if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
		});
	};
}

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

Blockly.Blocks['img_bgr_absdiff'] = {
	init: function() {
		this.setColour(0);
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("img1")
			.setCheck("Image_BGR")
			.appendField("img1").setAlign(Blockly.ALIGN_RIGHT);
		this.appendDummyInput()
			.appendField('absdiff')
			.setAlign(Blockly.ALIGN_CENTER)
			this.appendValueInput("img2")
			.setCheck("Image_BGR")
			.appendField("img2").setAlign(Blockly.ALIGN_RIGHT);
		this.setOutput(true, "Image_BGR");
		this.setTooltip('');
	}
};
Blockly.Python['img_bgr_absdiff'] = function(block) {
	var value_img1 = Blockly.Python.valueToCode(block, 'img1', Blockly.Python.ORDER_ATOMIC);
	var value_img2 = Blockly.Python.valueToCode(block, 'img2', Blockly.Python.ORDER_ATOMIC);
	// TODO: Assemble Python into code variable.
	var code = 'cv2.absdiff({0},{1})'.format(value_img1,value_img2);
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['input'] = {
	init: function() {
		this.setColour(0);
		this.setHelpUrl('http://www.example.com/');
		this.appendDummyInput()
			.appendField("input");
		this.setInputsInline(true);
		this.setOutput(true, "Image_BGR");
		this.setTooltip('');
	}
};
Blockly.Python['input'] = function(block) {
	// TODO: Assemble Python into code variable.
	var code = 'im_input';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['background'] = {
	init: function() {
		this.setColour(0);
		this.setHelpUrl('http://www.example.com/');
		this.appendDummyInput()
			.appendField("background");
		this.setInputsInline(true);
		this.setOutput(true, "Image_BGR");
		this.setTooltip('');
	}
};

Blockly.Python['img_gray_bgrtogray'] = function(block) {
	var value_img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
	// TODO: Assemble Python into code variable.
    var code = 'cv2.cvtColor({0},CV_BGR2GRAY)'.format(value_img);
    var code = 'cv2.cvtColor({0},cv2.COLOR_BGR2GRAY)\n'.format(value_img);

	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['output'] = {
	init: function() {
		this.setHelpUrl('http://www.example.com/');
		this.appendValueInput("output")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("output");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setTooltip('');
	}
};


Blockly.Python['output'] = function(block) {
    var value_output = Blockly.Python.valueToCode(block, 'output', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    return Blockly.Python.multipleCodeToOutput(value_output,"im_output");
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



Blockly.Blocks['im_threshold'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("im_threshold")
        .appendField(new Blockly.FieldVariable("item"), "im_variable")
        .appendField("Threshold :")
        .appendField(new Blockly.FieldTextInput("100"), "threshold");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['im_threshold'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("im_threshold")
        .appendField("Threshold :")
        .appendField(new Blockly.FieldTextInput("100"), "threshold");
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Python['im_threshold'] = function(block) {
  var value_im_threshold = Blockly.Python.valueToCode(block, 'im_threshold', Blockly.Python.ORDER_ATOMIC);
  var text_threshold = block.getFieldValue('threshold');
  // TODO: Assemble Python into code variable.
     var code = 'cv2.threshold({0},{1},255,cv2.THRESH_BINARY)[1]'.format(value_im_threshold,text_threshold);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
  
 
Blockly.Blocks['comment'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendValueInput("comment")
        .appendField(new Blockly.FieldTextInput("コメント"), "Comment");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Python['comment'] = function(block) {
  var value_comment = Blockly.Python.valueToCode(block, 'comment', Blockly.Python.ORDER_ATOMIC);
  var text_comment = block.getFieldValue('Comment');
  // TODO: Assemble Python into code variable.
  var code = '# {0}'.format(text_comment);
  return code;
};


