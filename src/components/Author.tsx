import React from 'react'
import { RoughNotation } from 'react-rough-notation'

const Author = () => {
  return (
    <div className="summary bg-matte  rounded-xl p-5 selection:text-primary selection:bg-secondary">
      <RoughNotation
        type="bracket"
        brackets={['left', 'right', 'top', 'bottom']}
        show={true}
        color="#f9f871"
        animationDelay={300}
        animationDuration={3000}
      >
        <h3>
          Hi, I'm{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#a8eb12"
            strokeWidth={2}
            padding={2}
          >
            Davis
          </RoughNotation>
        </h3>
        <br />
        <br />
        <p>
          I'm a{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#a8eb12"
            strokeWidth={2}
            padding={2}
          >
            software developer
          </RoughNotation>{' '}
          born and raised in Kigali.
          <br />
          <br />
          You wouldn't know it, but I'm also a{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#a8eb12"
            strokeWidth={2}
            padding={2}
          >
            comic book writer.
          </RoughNotation>
        </p>
        <p>(I use a pen name, so good luck figuring that out. :))</p>
        <br />
        <br />
        <p>
          Aside from talking about{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#00ffff"
            strokeWidth={2}
            padding={2}
          >
            Web Development
          </RoughNotation>
          , I talk about{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#00ffff"
            strokeWidth={2}
            padding={2}
          >
            anime,
          </RoughNotation>
          play{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#00ffff"
            strokeWidth={2}
            padding={2}
          >
            volleyball
          </RoughNotation>
          , and frequent{' '}
          <RoughNotation
            type="underline"
            show={true}
            color="#00ffff"
            strokeWidth={2}
            padding={2}
          >
            art galleries.
          </RoughNotation>
        </p>
      </RoughNotation>
      <br />
      <br />
    </div>
  )
}

export default Author
