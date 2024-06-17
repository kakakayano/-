
// 親要素のひな形
import React from 'react';
import SampleNames from "./sampleNames";

class SampleName extends React.Component { // このSampleNameがコンポーネント名です。
  constructor() {                          // 頭は大文字で、ファイル名も同名に
    super();
    this.state = {
      sampleState: 'sample',
    }
  }

// このスペースに諸々の処理を追加していく。

  render() {
    return ( // このreturnの中のHTMLのようなものををJSXと呼びこの中にJSXを書いていきます。
      <div>
        これはクラスコンポーネント!!!
        <SampleNames />
      </div>
    )
  }
}



