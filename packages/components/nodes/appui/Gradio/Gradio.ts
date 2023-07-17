import { BaseLanguageModel } from 'langchain/base_language'
import { INode, INodeData, INodeParams } from '../../../src/Interface'
import { getBaseClasses } from '../../../src/utils'
import { Embeddings } from 'langchain/embeddings/base'
import { WebBrowser } from 'langchain/tools/webbrowser'

class Gradio_Tools implements INode {
    label: string
    name: string
    description: string
    type: string
    icon: string
    category: string
    baseClasses: string[]
    inputs: INodeParams[]

    constructor() {
        this.label = 'Gradio UI'
        this.name = 'Gradio'
        this.type = 'WebBrowser'
        this.icon = 'Gradio.png'
        this.category = 'AppUI'
        this.description = 'Provide the application UI with Gradio'
        this.baseClasses = ['string']
        this.inputs = [
            {
                label: 'Chain',
                name: 'chain',
                type: 'LLMChain'
            }

        ]
    }

    async init(nodeData: INodeData): Promise<any> {
        const model = nodeData.inputs?.model as BaseLanguageModel
        const embeddings = nodeData.inputs?.embeddings as Embeddings

        return new WebBrowser({ model, embeddings })
    }
}

module.exports = { nodeClass: Gradio_Tools }
