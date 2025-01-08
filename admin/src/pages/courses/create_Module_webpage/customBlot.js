import Quill from 'quill';

const Block = Quill.import('blots/block');

class DivBlock extends Block {}

DivBlock.tagName = null;

Quill.register(DivBlock, true);
