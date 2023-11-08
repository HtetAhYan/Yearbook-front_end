import React, { useCallback, useRef, useState } from 'react';

import { Input, useDisclosure } from '@nextui-org/react';

import dynamic from 'next/dynamic';
const Editor=dynamic(()=>import('./EditorModal'),{loading:()=><p>loading</p>,ssr:false})
const FileUploadButton = ({path}:any) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
 const {isOpen, onOpen, onOpenChange} = useDisclosure();
  // Memoized event handler for file input change
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file:any = e.target.files?.[0];
    setSelectedFile(file);
    onOpen();
  }, []); 
  return (
    <div>
      {selectedFile && (<Editor selectedFile={selectedFile} isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} path={path}/>
      )}
<Input type="file" className='' onChange={handleFileChange} />
    </div>
  );
};

export default FileUploadButton;
