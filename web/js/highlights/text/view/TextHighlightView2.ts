import {Model} from '../../../model/Model';
import {ComponentManager} from '../../../components/ComponentManager';
import {DefaultContainerProvider} from '../../../components/containers/providers/impl/DefaultContainerProvider';
import {TextHighlightModel} from '../model/TextHighlightModel';
import {TextHighlightComponent} from './components/TextHighlightComponent';

export class TextHighlightView2 {

    private readonly componentManager: ComponentManager;

    /**
     *
     * @param model {Model}
     */
    constructor(model: Model) {

        this.componentManager = new ComponentManager(model,
                                                     new DefaultContainerProvider(),
                                                     () => new TextHighlightComponent(),
                                                     () => new TextHighlightModel());

    }

    public start() {
        this.componentManager.start();
    }

}
