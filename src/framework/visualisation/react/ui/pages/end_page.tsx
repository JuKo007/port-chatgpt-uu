import { Weak } from '../../../../helpers'
import { PropsUIPageEnd } from '../../../../types/pages'
import { ReactFactoryContext } from '../../factory'
import { Page } from './templates/page'
import TextBundle from '../../../../text_bundle'
import { Translator } from '../../../../translator'
import { BodyLarge, Title1 } from '../elements/text'

type Props = Weak<PropsUIPageEnd> & ReactFactoryContext

export const EndPage = (props: Props): JSX.Element => {
  const { title, text } = prepareCopy(props)

  const body: JSX.Element = (
    <>
      <Title1 text={title} />
      <div className="text-body-large"><div dangerouslySetInnerHTML={{ __html: text }} /></div>
    </>
  )

  return (
    <Page
      body={body}
    />
  )
}

interface Copy {
  title: string
  text: string
}

function prepareCopy ({ locale }: Props): Copy {
  return {
    title: Translator.translate(title, locale),
    text: Translator.translate(text, locale)
  }
}

const title = new TextBundle()
  .add('en', 'Thank you!')
  .add('nl', 'Bedankt!')
  .add('de', 'Vielen Dank!')

const text = new TextBundle()
  .add('en', `
    <div style="font-size: 1.1rem; line-height: 1.6;">
      <p>To receive your additional thank-you payment of <strong>€5</strong>, please click the following link:</p><br>
      <p>
        <a href="LINK REMOVED"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #007bff; text-decoration: underline;">
           LINK REMOVED
        </a><br>
      </p>
      <p>Your completion code is: <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">CODE REMOVED</code></p><br><br><br>

      <p>If you forgot to claim your previous <strong>€2</strong> thank-you reward after finishing the survey, you can do so here:</p><br>
      <p>
        <a href="LINK REMOVED"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #007bff; text-decoration: underline;">
           LINK REMOVED
        </a><br>
      </p>
      <p>Your completion code is: <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">CODE REMOVED</code></p><br><br>

      <p>You can close this browser window <strong>after redeeming the code</strong>.</p>
    </div>
  `)

  .add('nl', `
    <div style="font-size: 1.1rem; line-height: 1.6;">
      <p>Om uw extra bedankje van <strong>€5</strong> te ontvangen, klikt u op de volgende link:</p><br>
      <p>
        <a href="LINK REMOVED"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #007bff; text-decoration: underline;">
           LINK REMOVED
        </a><br>
      </p>
      <p>Uw bevestigingscode is: <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">CODE REMOVED</code></p><br><br><br>

      <p>Als u vergeten bent om uw eerdere bedankje van <strong>€2</strong> in te wisselen na het voltooien van de enquête, kunt u dat hier nog doen:</p><br>
      <p>
        <a href="LINK REMOVED"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #007bff; text-decoration: underline;">
           LINK REMOVED
        </a><br>
      </p>
      <p>Uw bevestigingscode is: <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">CODE REMOVED</code></p><br><br>

      <p>U kunt dit browservenster <strong>sluiten nadat u de code heeft ingewisseld</strong>.</p>
    </div>
  `)

  .add('de', `
    <div style="font-size: 1.1rem; line-height: 1.6;">
      <p>Um Ihr zusätzliches Dankeschön in Höhe von <strong>5€</strong> zu erhalten, klicken Sie bitte auf den folgenden Link:</p><br>
      <p>
        <a href="LINK REMOVED"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #007bff; text-decoration: underline;">
           LINK REMOVED
        </a><br>
      </p>
      <p>Der Bestätigungscode lautet: <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">CODE REMOVED</code></p><br><br><br>

      <p>Falls Sie vergessen haben sollten, nach Beendigung der Umfrage Ihr vorheriges Dankeschön in Höhe von <strong>2€</strong> einzulösen, können Sie das hier tun:</p><br>
      <p>
        <a href="LINK REMOVED"
           target="_blank"
           rel="noopener noreferrer"
           style="color: #007bff; text-decoration: underline;">
           LINK REMOVED
        </a><br>
      </p>
      <p>Der Bestätigungscode lautet: <code style="background-color: #f4f4f4; padding: 2px 4px; border-radius: 4px;">CODE REMOVED</code></p><br><br>

      <p>Sie können dieses Browserfenster <strong>nach dem Einlösen des Codes schließen</strong>.</p>
    </div>
  `);

