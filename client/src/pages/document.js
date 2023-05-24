import { observer } from 'mobx-react'
import React, { useEffect, useContext } from 'react'
import { getDocument } from '../http/dataAPI'
import { Context } from '../index'

const document = observer(() => {

    const { datas } = useContext(Context)

    useEffect(() => {
        getDocument().then(data => datas.setDocument(data))
    }, [])
    return (
        <div>
            <h1>Документы</h1>
            {datas.document.map(document =>
                <h2>
                    <a href={document.path} style={{color: 'black'}}>{document.name}</a>
                </h2>
            )}

        </div>
    )
})

export default document
