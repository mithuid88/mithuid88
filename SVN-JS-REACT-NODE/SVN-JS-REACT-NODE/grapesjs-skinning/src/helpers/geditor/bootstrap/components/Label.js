import labelIcon from "../icons/label.svg";

export const LabelBlock = (bm, label) => {
    bm.add('bootstrap_label', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path class="gjs-block-svg-path" d="M22,11.875 C22,11.35 21.5,11 20.75,11 L3.25,11 C2.5,11 2,11.35 2,11.875 L2,17.125 C2,17.65 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.65 22,17.125 L22,11.875 Z M21,17 L3,17 L3,12 L21,12 L21,17 Z" fill-rule="nonzero"></path>
            <rect class="gjs-block-svg-path" x="2" y="5" width="14" height="5" rx="0.5"></rect>
            <polygon class="gjs-block-svg-path" fill-rule="nonzero" points="4 13 5 13 5 16 4 16"></polygon>
        </svg>
      <div>${label}</div>`,
        category: 'Bootstrap Forms',
        content: '<label>Label</label>',
    });
};

export default (dc, traits, config = {}) => {

    const textType = dc.getType('text');
    const textModel = textType.model;
    const textView = textType.view;

    dc.addType('label', {
        model: {
            defaults: {
                ...textModel.prototype.defaults,
                'custom-name': config.labels.label,
                tagName: 'label',
                traits: [traits.for],
            },
        },
        isComponent(el) {
            if(el.tagName == 'LABEL'){
                return {type: 'label'};
            }
        },
        view: textView,
    });
}
