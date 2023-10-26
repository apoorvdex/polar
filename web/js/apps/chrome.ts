import {Launcher} from './Launcher';
// import {FirebasePersistenceLayerFactory} from "../datastore/factories/FirebasePersistenceLayerFactory";
import {Logger} from '../logger/Logger';
// import {MemoryDatastore} from "../datastore/MemoryDatastore";
// import {PersistenceLayers} from "../datastore/PersistenceLayers";
import {DocMetas, MockDocMetas} from "../metadata/DocMetas";
import {MemoryPersistenceLayerFactory} from "../datastore/factories/MemoryPersistenceLayerFactory";

const log = Logger.create();


function createDocMeta0() {

    // create some fake documents for our example PDFs
    let fingerprint = "110dd61fd57444010b1ab5ff38782f0f";

    let docMeta = MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
    DocMetas.addPagemarks(docMeta, {nrPages: 1, offsetPage: 4, percentage: 50})
    return docMeta;

}

function createDocMeta1() {

    // create some fake documents for our example PDFs
    let fingerprint = "htmldoc01";

    let docMeta = MockDocMetas.createWithinInitialPagemarks(fingerprint, 1);
    DocMetas.addPagemarks(docMeta, {nrPages: 1, offsetPage: 1, percentage: 25})
    return docMeta;

}

async function persistenceLayerFactory() {

    // const persistenceLayer = FirebasePersistenceLayerFactory.create();
    // await persistenceLayer.init();
    // return persistenceLayer;


    // let datastore = new MemoryDatastore();
    // let persistenceLayer = PersistenceLayers.toPersistenceLayer(datastore);
    //
    // await persistenceLayer.init();

    let persistenceLayer = MemoryPersistenceLayerFactory.create();
    await persistenceLayer.init();
    //docMetaRefs
    // await persistenceLayer.synchronizeDocs(PersistenceLayerscreateDocMeta0());
    // await persistenceLayer.synchronizeDocs(createDocMeta1());

    return persistenceLayer;

}

new Launcher(persistenceLayerFactory).launch()
    .then(() => log.info("App now loaded."))
    .catch(err => log.error(err));


