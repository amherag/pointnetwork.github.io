(self.webpackChunk=self.webpackChunk||[]).push([[615],{84958:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return h},metadata:function(){return k},toc:function(){return u}});var a=n(22122),i=n(19756),o=n(67294),r=n(3905),s=n(21140),l=n.n(s);l().initialize({startOnLoad:!0,theme:"dark",logLevel:1,flowchart:{curve:"linear"}});var d=function(e){var t=e.chart;return(0,o.useEffect)((function(){l().contentLoaded()}),[]),o.createElement("div",{className:"mermaid"},t)},p=["components"],h={id:"storage",title:"Storage"},c="Point Network Storage Layer",k={unversionedId:"storage",id:"storage",isDocsHomePage:!1,title:"Storage",description:"To save a file in the storage layer, a developer can call the putFile function passing in the file like so: storage.putFile(filePath). This is a function call that will return the unique file id of the file originally located at the filePath.",source:"@site/docs/storage.md",sourceDirName:".",slug:"/storage",permalink:"/docs/storage",version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1629862881,formattedLastUpdatedAt:"8/25/2021",frontMatter:{id:"storage",title:"Storage"}},u=[{value:"File States",id:"file-states",children:[]},{value:"Chunk States",id:"chunk-states",children:[]},{value:"Storage Link States",id:"storage-link-states",children:[]},{value:"Process: upload and chunkify file",id:"process-upload-and-chunkify-file",children:[]},{value:"Process: checking upload status",id:"process-checking-upload-status",children:[]}],S={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"point-network-storage-layer"},"Point Network Storage Layer"),(0,r.kt)("p",null,"To save a file in the storage layer, a developer can call the putFile function passing in the file like so: ",(0,r.kt)("inlineCode",{parentName:"p"},"storage.putFile(filePath)"),". This is a function call that will return the unique file id of the file originally located at the ",(0,r.kt)("inlineCode",{parentName:"p"},"filePath"),"."),(0,r.kt)("p",null,"Firstly we can outline this using high level state machine diagrams for ",(0,r.kt)("inlineCode",{parentName:"p"},"File"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderLink")," as follows."),(0,r.kt)("h2",{id:"file-states"},"File States"),(0,r.kt)(d,{chart:"\n  stateDiagram-v2\n    [*] --\x3e Created: putFile\n    Created --\x3e Uploading: chunkify\n    Uploading --\x3e Uploaded: chunks_uploading==0\n    Uploading --\x3e Uploading: chunks_uploading>0\n    Uploaded --\x3e [*]\n",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"chunk-states"},"Chunk States"),(0,r.kt)(d,{chart:"\n  stateDiagram-v2\n    [*] --\x3e Created: createChunkFromFile\n    Created --\x3e Uploading: check state\n    Uploading --\x3e Uploading: chunk conditions NOT satisfied\n    Uploading --\x3e Uploaded: chunk conditions satisfied\n    Uploaded --\x3e [*]\n",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"storage-link-states"},"Storage Link States"),(0,r.kt)(d,{chart:"\n  stateDiagram-v2\n    [*] --\x3e Created\n    Created --\x3e Agreed\n    Created --\x3e Failed\n    note left of Created: STORE_CHUNK_REQUEST\n    Agreed --\x3e Establish_payment_channel:Payment channel does not exists\n    Agreed --\x3e Encrypting:Payment channel already exists\n    Establish_payment_channel --\x3e Encrypting\n    Encrypting --\x3e Encrypted\n    Encrypting --\x3e Failed\n    Encrypted --\x3e SendingSegmentMap\n    note left of SendingSegmentMap: STORE_CHUNK_SEGMENTS\n    SendingSegmentMap --\x3e SendingData\n    note left of SendingData: STORE_CHUNK_DATA\n    SendingSegmentMap --\x3e Failed\n    SendingData --\x3e DataReceived\n    SendingData --\x3e Failed\n    DataReceived --\x3e AskingForSignature\n    AskingForSignature --\x3e Signed\n    AskingForSignature --\x3e Failed\n    note left of AskingForSignature: STORE_CHUNK_SIGNATURE_REQUEST\n    Failed --\x3e [*]\n    Signed --\x3e [*]\n    note left of Signed: SEND_MICROPAYMENT_FOR_CHUNK\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"NOTE: Yellow boxes represent communication to the linked node."),(0,r.kt)("h2",{id:"process-upload-and-chunkify-file"},"Process: upload and chunkify file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Storage.putFile")," - the public storage interface for storing a file on the network. It calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage.enqueueFileForUpload")," and waits to get the file id of the file (file may not be uploaded yet). Then waits until the File uploading status is ",(0,r.kt)("inlineCode",{parentName:"p"},"File.UPLOADING_STATUS_UPLOADED"),". It also calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage.chunkUploadingTick")," to ensure the chunks are uploaded based on the expectations set in the file metadata.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Storage.enqueueFileForUpload"),"- This calls ",(0,r.kt)("inlineCode",{parentName:"p"},"File.chunkify")," (see details below) and sets the files metadata for redundancy, expiry and auto renew policies. Once the file is broken into chunks it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"File.reconsiderUploadingStatus")," (see below).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"File.chunkify")," - splits the file by breaking the file into chunks of equal size of bytes upto the last chunk which may be smaller in size. It also creates a merkle tree using the chunk ids as the leaves. Each chunk has an initial state of ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk.UPLOADING_STATUS_CREATED"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"File.reconsiderUploadingStatus")," - sets the chunks metadata for ",(0,r.kt)("strong",{parentName:"p"},"redundancy"),", ",(0,r.kt)("strong",{parentName:"p"},"expiry")," and ",(0,r.kt)("strong",{parentName:"p"},"auto renew")," policies and then calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk.reconsiderUploadingStatus")," for each chunk (see below).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Chunk.reconsiderUploadingStatus")," - checks that the chunk has the expected data redundancy (i.e. that it is stored in at least N providers) and that it has not expired. If any of these are not settled then the status of the chunk is set to Chunk.",(0,r.kt)("inlineCode",{parentName:"p"},"UPLOADING_STATUS_UPLOADING")," otherwise it is considered uploaded and so the status is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk.UPLOADING_STATUS_UPLOADED"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Storage.chunkUploadingTick")," - this function is called as a result of the original call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage.putFile")," and it is also called on every \u2018tick\u2019 if there are any chunks that have a status Chunk.",(0,r.kt)("inlineCode",{parentName:"p"},"UPLOADING_STATUS_UPLOADING"),". In this function the chunks Storage Links  are pushed through various states of the uploading process and we can run though these states in the next step."))),(0,r.kt)("h2",{id:"process-checking-upload-status"},"Process: checking upload status"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage.chunkUploadingTick")," function checks, and potentially, modifies the state of all the Storage Links of an uploading file chunk. The state of the chunk must be in ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk.UPLOADING_STATUS_UPLOADING")," for this function to proceed."),(0,r.kt)("p",null,"The function proceeds as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Checks if the uploading chunk is required to be pushed to additional storage providers. It does this by fetching all the Storage Links for the chunk that have not failed and then compares that with the chunk redundancy to determine if more are required.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_CREATED"),": If additional Storage Providers are required then one is chosen using ",(0,r.kt)("inlineCode",{parentName:"p"},"chooseProviderCandidate()")," function. The process of choosing a provider candidate is detailed elsewhere in the docs. A new Storage Link is created and the provider, ",(0,r.kt)("strong",{parentName:"p"},"redkeyId"),", and ",(0,r.kt)("strong",{parentName:"p"},"chunk id")," is set on this new instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_AGREED"),": A ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_CHUNK_REQUEST")," call is made to the linked Storage Provider and if agreed a check to determine if there is an existing payment channel between the client and the storage provider is carried out using ",(0,r.kt)("inlineCode",{parentName:"p"},"checkExistingChannel()")," function. If a channel exists the status is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_AGREED")," otherwise it is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ESTABLISH_PAYMENT_CHANNEL")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_CHUNK_REQUEST")," call fails it is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_FAILED"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_CHUNK_REQUEST")," call is handled using a custom Kademlia plugin or middleware that defines this handler (more on networking in a separate section of the documentation). Note this is a request to another node to store the chunk and at this point the actual chunk data is not sent to the other node - only the id, length and expiry parameters are sent.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ESTABLISH_PAYMENT_CHANNEL"),": The function then checks in the  ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ESTABLISH_PAYMENT_CHANNEL")," state and creates a payment channel with the Storage Provider using ",(0,r.kt)("inlineCode",{parentName:"p"},"createChannel()")," function. if successful the status is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_AGREED"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ENCRYPTING"),": The function then checks all the Storage Links in the ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_AGREED")," state and begins the encryption process. The Storage Link state is first updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ENCRYPTING"),"  and then the encryption process is performed by a forked child process that returns a message to the parent process when the encryption is complete.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ENCRYPTED"),": The resulting encrypted chunk is split into multiple segment hashes used to produce a Merkle Tree representation of the chunk. This is then used to update the Storage Link once more with the resulting encrypted hash, encryption data length, segment hashes, merkle tree and merkle tree root. The status is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ENCRYPTED")," at this point or ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_FAILED")," if the encryption process failed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"StorageLink.STATUS_SENDING_SEGMENT_MAP: The function then checks all the Storage Links in the ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ENCRYPTED")," state and begins sending the segment map to the linked Storage Provider. It first sets the state to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_SENDING_SEGMENT_MAP")," and then calls ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_CHUNK_SEGMENTS")," on the linked Storage Provider. The status is then updated to either ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_SENDING_DATA")," if the request was successful or ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_DATA_RECEIVED")," if the response was ECHUNKALREADYSTORED from the linked Storage Provider. As always, if there was an error then the status is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_FAILED")," .")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_SENDING_DATA"),": The function then checks all the Storage Links in the ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_SENDING_DATA")," state and then prepares the data to be sent to the linked Storage Provider (which includes checking if chunks should be retransmitted due to a timeout condition). Once the data is prepared it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"STORE_CHUNK_DATA"),"  which will invoke the equivalent function on the linked Storage Provider instance which will then store the data sent. On successful transmission of the data the Storage Link status is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_DATA_RECEIVED")," otherwise it is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_FAILED"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_DATA_RECEIVED"),": The function then checks all the Storage Links in the ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_DATA_RECEIVED")," state and updates the state to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_ASKING_FOR_SIGNATURE")," and then sends a request to the linked Storage Provider for it to sign the chunk. Once it is successfully signed the status is changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_SIGNED")," and the agreed micropayment is made to the Storage Provider using the makePayment() function. otherwise it is updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageLink.STATUS_FAILED"),"."))))}g.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=11748}}]);