import {Logger} from '../../logger/Logger';
import {ListenablePersistenceLayer} from '../ListenablePersistenceLayer';
import {DefaultPersistenceLayer} from '../DefaultPersistenceLayer';
import {AdvertisingPersistenceLayer} from '../advertiser/AdvertisingPersistenceLayer';
import {RemoteDatastores} from '../RemoteDatastores';
import {MemoryDatastore} from "../MemoryDatastore";
import {AbstractAdvertisingPersistenceLayer} from "../advertiser/AbstractAdvertisingPersistenceLayer";
import {PersistenceLayer, PersistenceLayerID} from "../PersistenceLayer";
import {PersistenceLayerEvent} from "../PersistenceLayerEvent";

const log = Logger.create();

export class MemoryPersistenceLayerFactory {

    public static create(): ListenablePersistenceLayer {

        log.info("Using remote persistence layer and disk store");

        const datastore = new MemoryDatastore();

        // const defaultPersistenceLayer = new DefaultPersistenceLayer(datastore);
        // const advertisingPersistenceLayer = new AdvertisingPersistenceLayer(defaultPersistenceLayer);

        return new NullListenablePersistenceLayer(new DefaultPersistenceLayer(datastore));

    }

}

export class NullListenablePersistenceLayer extends AbstractAdvertisingPersistenceLayer {

    public readonly id: PersistenceLayerID = 'null';

    constructor(delegate: PersistenceLayer) {
        super(delegate);
    }

    protected broadcastEvent(event: PersistenceLayerEvent): void {
    }

}
