import React from 'react';
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Education = ({title, data}) => {
    return (
        <div className="Education">
            <H2Styled name={title} />
            <div className="Education-container">
                {
                    data.map((datos) => {
                        return (
                            <div className="Education-item" key={datos.subtitle}>
                                <H3Styled>
                                    {datos.subtitle} 
                                </H3Styled>
                                <PStyled name={datos.text} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Education;