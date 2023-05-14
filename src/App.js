import './App.css';

import { useState, useRef } from 'react';
import copy from "copy-to-clipboard";  

function App() {

    const [content, setContent] = useState("You can customize me to your server's desire! ✨");
    const [author, setAuthor] = useState('');
    const [authorIcon, setAuthorIcon] = useState('');
    const [title, setTitle] = useState("I'm Your Message Title 👋");
    const [desc, setDesc] = useState("You can put anything here, links, Discord markdown and more! ");
    const [color, setColor] = useState('#40c0cc');
    const [thumb, setThumb] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [footer, setFooter] = useState('');
    const [footerIcon, setFooterIcon] = useState('');
    const [timestamp, setTimestamp] = useState(false);

    const [final, setFinal] = useState(`;welcome message ${content ? `${content}` : ``} ${author ? `--author-name ${author}` : ``} ${authorIcon ? `--author-icon ${authorIcon}` : ``} ${title ? `--title ${title}` : ``} ${desc ? `--description ${desc}` : ``} ${color ? `--color ${color}` : ``} ${thumb ? `--thumbnail ${thumb}` : ``} ${imgUrl ? `--image ${imgUrl}` : ``} ${footer ? `--footer-name ${footer}` : ``} ${footerIcon ? `--footer-icon ${footerIcon}` : ``} ${timestamp ? `--timestamp` : ``}`);
    const [showFinal, setShowFinal] = useState(false);

    const [showCode, setShowCode] = useState(false)
    const showCodeText = () => {setShowCode(true)}
    const hideCodeText = () => {setShowCode(false)}

    const date = new Date()
    const borderColor = { borderLeftColor:color }
    const closeFinal = () => { setShowFinal(false) }
    const discorticsWebOpen = () => {window.open('https://discortics.com', '_blank')}

    const contentUpdate = (e) => { setContent(e.target.value); updateFinal()}
    const authorUpdate = (e) => { setAuthor(e.target.value); updateFinal() }
    const authorIconUpdate = (e) => { setAuthorIcon(e.target.value); updateFinal() }
    const titleUpdate = (e) => { setTitle(e.target.value); updateFinal() }
    const descUpdate = (e) => { setDesc(e.target.value); updateFinal() }
    const colorUpdate = (e) => { setColor(e.target.value); updateFinal() }
    const thumbUpdate = (e) => { setThumb(e.target.value); updateFinal() }
    const imgUrlUpdate = (e) => { setImgUrl(e.target.value); updateFinal() }
    const footerUpdate = (e) => { setFooter(e.target.value); updateFinal() }
    const footerIconUpdate = (e) => { setFooterIcon(e.target.value); updateFinal() }
    const timestampUpdate = (e) => { if (timestamp === false) {setTimestamp(true) } else { setTimestamp(false) }; updateFinal()}

    const updateFinal = () => {
        setFinal(`;welcome message ${content ? `${content}` : ``} ${author ? `--author-name ${author}` : ``} ${authorIcon ? `--author-icon ${authorIcon}` : ``} ${title ? `--title ${title}` : ``} ${desc ? `--description ${desc}` : ``} ${color ? `--color ${color}` : ``} ${thumb ? `--thumbnail ${thumb}` : ``} ${imgUrl ? `--image ${imgUrl}` : ``} ${footer ? `--footer-name ${footer}` : ``} ${footerIcon ? `--footer-icon ${footerIcon}` : ``} ${timestamp ? `--timestamp` : ``}`)
    }

    const copyFinal = (e) => {
        copy(final)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        setShowFinal(true)
        setFinal(`;welcome message ${content ? `${content}` : ``} ${author ? `--author-name ${author}` : ``} ${authorIcon ? `--author-icon ${authorIcon}` : ``} ${title ? `--title ${title}` : ``} ${desc ? `--description ${desc}` : ``} ${color ? `--color ${color}` : ``} ${thumb ? `--thumbnail ${thumb}` : ``} ${imgUrl ? `--image ${imgUrl}` : ``} ${footer ? `--footer-name ${footer}` : ``} ${footerIcon ? `--footer-icon ${footerIcon}` : ``} ${timestamp ? `--timestamp` : ``}`)

        copyFinal()
        setInterval(() => {
            setShowFinal(false)
        }, 20000)
    }
    const selectPreset = () => {
        let selectBox = document.getElementById("presets");
        let selectedValue = selectBox.options[selectBox.selectedIndex].value;

        if (selectedValue === '1a') {
            setContent('Hey [user:mention],')
            setAuthor('')
            setAuthorIcon('')
            setTitle('Welcome to [server:name]')
            setDesc(`➡️ [server:members]th member\n➡️ #self-roles - Be up-to-date with our updates.\n➡️ #bot-support - Seek bot-related support.`)
            setColor('#2b2d31')
            setThumb('[user:avatar]')
            setImgUrl('https://media.discordapp.net/attachments/804013909236908083/868364210436980736/unknown.png')
            setFooter('Invited by [inviter:tag] ([inviter:invites] invites)')
            setFooterIcon('[inviter:avatar]')
            setTimestamp(false)
        } else if (selectedValue === '1b') {
            setContent('👋 Everyone please welcome [user:mention]')
            setAuthor('')
            setAuthorIcon('')
            setTitle('')
            setDesc(``)
            setColor('')
            setThumb('')
            setImgUrl('')
            setFooter('')
            setFooterIcon('')
            setTimestamp(false)
        } else if (selectedValue === '2b') {
            setContent('[user:mention] Hope you brought the pizza! 🍕')
            setAuthor('')
            setAuthorIcon('')
            setTitle('')
            setDesc(``)
            setColor('')
            setThumb('')
            setImgUrl('')
            setFooter('')
            setFooterIcon('')
            setTimestamp(false)
        } else if (selectedValue === '3b') {
            setContent('[user:mention] just joined!')
            setAuthor('')
            setAuthorIcon('')
            setTitle('')
            setDesc(``)
            setColor('')
            setThumb('')
            setImgUrl('')
            setFooter('')
            setFooterIcon('')
            setTimestamp(false)
        } else if (selectedValue === '4b') {
            setContent('[user:mention]')
            setAuthor('')
            setAuthorIcon('')
            setTitle('👋 Welcome to the party!')
            setDesc(`We hope you enjoy your stay!`)
            setColor('#ff5c5c')
            setThumb('')
            setImgUrl('')
            setFooter('')
            setFooterIcon('')
            setTimestamp(false)
        } else if (selectedValue === '1c') {
            setContent('👋 Everyone please welcome [user:mention]')
            setAuthor('You are our [server:members]th member')
            setAuthorIcon('[user:avatar]')
            setTitle('Welcome to [server:name]')
            setDesc(`🚪 We hope you enjoy your stay in [server:name]`)
            setColor('#8700e0')
            setThumb('')
            setImgUrl('')
            setFooter('')
            setFooterIcon('')
            setTimestamp(false)
        } else if (selectedValue === '2c') {
            setContent('📣 Welcome [user:mention]')
            setAuthor('[server:name]')
            setAuthorIcon('[server:icon]')
            setTitle('Please make yourself at home!')
            setDesc(`Welcome to [server:name], you are our [server:members]th member!`)
            setColor('#e07800')
            setThumb('')
            setImgUrl('')
            setFooter('[user:tag]')
            setFooterIcon('[user:avatar]')
            setTimestamp(false)
        } else if (selectedValue === '3c') {
            setContent('[user:mention] Thanks for joining 👋')
            setAuthor('[server:name]')
            setAuthorIcon('[server:icon]')
            setTitle('Welcome!')
            setDesc(`Everyone please welcome [user:mention]!`)
            setColor('#00c6e0')
            setThumb('')
            setImgUrl('')
            setFooter('')
            setFooterIcon('[user:avatar]')
            setTimestamp(true)
        }

        setFinal(`;welcome message ${content ? `${content}` : ``} ${author ? `--author-name ${author}` : ``} ${authorIcon ? `--author-icon ${authorIcon}` : ``} ${title ? `--title ${title}` : ``} ${desc ? `--description ${desc}` : ``} ${color ? `--color ${color}` : ``} ${thumb ? `--thumbnail ${thumb}` : ``} ${imgUrl ? `--image ${imgUrl}` : ``} ${footer ? `--footer-name ${footer}` : ``} ${footerIcon ? `--footer-icon ${footerIcon}` : ``} ${timestamp ? `--timestamp` : ``}`)

    }
 
  return (
    <div id="App">
        <section id="top">
            <div>
                <div className="logo">
                    <img className='mobile-hide'src="https://discortics.com/icon.webp" alt="" onClick={discorticsWebOpen}/>
                    <p className='mobile-hide-extra'>Welcome Message Builder</p>
                </div>
                <div className="preset-right">
                    <p>Select preset:</p>
                    <select name="presets" id="presets" defaultValue='Custom' onChange={selectPreset}>
                        <option value="custom">Custom</option>
                        <optgroup label='Copy ones in big servers'>
                            <option value="1a">Discortics</option>
                        </optgroup>
                        <optgroup label='user info'>
                            <option value="1b">Design 1</option>
                            <option value="2b">Design 2</option>
                            <option value="3b">Design 3</option>
                            <option value="4b">Design 4</option>
                        </optgroup>
                        <optgroup label='user info, server info'>
                            <option value="1c">Design 1</option>
                            <option value="2c">Design 2</option>
                            <option value="3c">Design 3</option>
                        </optgroup>
                        <optgroup label='Submit presets on the Support server'>
                        </optgroup>
                    </select> 
                </div>
            </div>
        </section>
        <div className="App">

        {showFinal && 
            <div className="final-banner">
                <p onClick={closeFinal}><span className="mobile-hide">✨</span> Copied to your clipboard!</p> <button onClick={formSubmit} className='btn btn-outline-secondary btn-sm'>Copy Again</button>
            </div>
        }
        <div className="child-one">
            <form id="form" onSubmit={formSubmit} onChange={updateFinal} className="container">
                <h2>Message Builder</h2>
                <div className="mb-3 form-check form-checkbox w-100">
                    <label htmlFor="content" className="form-label">Content</label>
                    <input type="text" 
                        placeholder="Content" className="input" id="content"
                        aria-describedby="emailHelp"
                        value={content}
                        onChange={contentUpdate}
                        />

                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="Author" className="form-label">Author</label>
                        <input type="text" placeholder="Author Name"
                            className="input" id="author-name"
                            value={author}
                            onChange={authorUpdate}/>
                    </div>
                    <div className="col">
                        <label htmlFor="author-icon" className="form-label">Author Icon</label>
                        <input type="text"
                            placeholder="https://example.com/author.png"
                            className="input"
                            id="author-icon"
                            value={authorIcon}
                            onChange={authorIconUpdate}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" placeholder="Title of the embed"
                            className="input" id="title"
                            value={title}
                            onChange={titleUpdate}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="input"
                            placeholder="Description of the embed"
                            id="description" rows="5"
                            value={desc}
                            onChange={descUpdate}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <label htmlFor="color" className="form-label">Color</label>
                        <input type="color" className="  
                            form-control-color" id="color"
                            title="Choose your color"
                            value={color}
                            onChange={colorUpdate}/>
                    </div>
                    <div className="col-5">
                        <label htmlFor="hex" className="form-label">Hex</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text mobile-hide-less" id="basic-addon1">#</span>
                            <input type="text" className="  "
                                maxLength="6"
                                id="hex"
                                placeholder={color} aria-label="Hex Code"
                                aria-describedby="basic-addon1"
                                value={color}
                                onChange={colorUpdate}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
                        <input type="text" className="input"
                            placeholder="https://example.com/thumbnail.png"
                            id="thumbnail"
                            value={thumb}
                            onChange={thumbUpdate}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="image" className="form-label">Image URL</label>
                        <input type="text"
                            placeholder="https://example.com/image.png"
                            className="input" id="image"
                            value={imgUrl}
                            onChange={imgUrlUpdate}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label htmlFor="footer-name" className="form-label">Footer Name</label>
                        <input type="text" className="input"
                            placeholder="Footer text"
                            id="footer-text"
                            value={footer}
                            onChange={footerUpdate}/>
                    </div>
                    <div className="col-5">
                        <label htmlFor="footer-icon" className="form-label">Footer Icon</label>
                        <input type="text" className="input"
                            placeholder="https://example.com/footer.png"
                            id="footer-icon"
                            value={footerIcon}
                            onChange={footerIconUpdate}
                            />
                    </div>
                    <div className="">
                        <div className="form-check col-12">
                            <input type="checkbox" className="btn-check timestamp"
                                id="timestamp" autoComplete="off" onClick={timestampUpdate}/>
                            <label className="btn btn-outline-primary timestamp"
                            htmlFor="timestamp">Timestamp 
                            </label><br/>
                        </div>
                    </div>
                </div><br/>
                <button type="submit" id="submit" onClick={updateFinal} className="btn btn-primary">Submit</button>
            </form>
            <div className="toast align-items-center text-bg-danger border-0
                " id="toast"
                role="alert" aria-live="assertive" aria-atomic="true">
                <div className="d-flex">
                    <div className="toast-body">Invalid URL</div>
                    <button type="button" className="btn-close btn-close-white me-2
                        m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
            <ul>
                <li>You don't need to use <strong>Escape Sequences</strong> such
                    as <strong><code>\n</code>, <code>\t</code></strong> etc.</li>
                <li>Make sure the URLs are a valid Image </li>
                <li>You can use image variables in image input to show the image </li>
                <details>
                    <summary>Variables</summary>
                    <ul>
                        <li>
                            <p><strong>User variables</strong><br/>
                                <code>[user:mention]</code> - Mention the User<br/>
                                <code>[user:tag]</code> - Show the tag of the
                                User<br/>
                                <code>[user:creation]</code> - Show the user
                                account creation date (DD MM YYYY)<br/>
                                <code>[user:createdAgo]</code> - Show how long
                                ago the account was created<br/>
                                <code>[user:avatar]</code> - User avatar image
                                link</p>
                        </li>
                        <li>
                            <p><strong>Server variables</strong><br/>
                                <code>[server:name]</code> - Show the Server
                                Name<br/>
                                <code>[server:members]</code> - Server Member
                                Count<br/>
                                <code>[server:icon]</code> - Server icon url<br/>
                                <code>[inviter:mention]</code> - Mention the
                                Inviter</p>
                        </li>
                        <li>
                            <p><strong>Inviter variables</strong><br/>
                                <code>[inviter:tag]</code> - Show the tag of the
                                Inviter<br/>
                                <code>[inviter:id]</code> - Display Inviter ID<br/>
                                <code>[inviter:invites]</code> - Show the number
                                of Valid Invites by the Inviter<br/>
                                <code>[inviter:total]</code> - Show the Total
                                Invites by the Inviter<br/>
                                <code>[inviter:leaves]</code> - Show Inviters
                                left invites<br/>
                                <code>[inviter:fake]</code> - Show the number of
                                Fake Invites by the Inviter<br/>
                                <code>[inviter:code]</code> - Show the code used
                                to join<br/>
                                <code>[inviter:avatar]</code> - Inviter avatar
                                url</p>
                        </li>
                    </ul>
                </details>
            </ul>
        </div>
        <div className="child-two">
            <div className="message">
                <h2 className='preview-h2'>Preview</h2>
                <div className="preview">
                    <div className="sender">
                        <img src="https://discortics.com/icon.webp" alt="" className="icon" />
                        <p>Disortics <span>bot</span></p>
                    </div>
                    {content && <p className="content"> {content} </p>} 
                    <div className="embed" style={borderColor}>
                    <div className="author">
                        {authorIcon && <img className='icon' src={authorIcon}/> }
                        {author && <p className='small'> {author} </p> }
                    </div>


                    {thumb === '' && 
                        <div className="text">
                            {title && <h3 className='title'>{title}</h3>} 
                            {desc && <p className='desc'>{desc}</p>}
                        </div>
                        }
                    {thumb && 
                    <div className="main">
                        <div className="text">
                            {title && <h3 className='title'>{title}</h3>} 
                            {desc && <p className='desc'>{desc}</p>}
                        </div>
                        <div className="thumb">
                            {thumb && <img className='thumb' src={thumb} alt={thumb} />}
                        </div>
                    </div>}

                    {imgUrl && <img src={imgUrl} alt={imgUrl}></img>}

                    <div className="footer">
                        {footerIcon && <img className='icon' src={footerIcon}></img>}
                        {footer && <p className='small'>{footer}</p>}
                        {(footer && timestamp) && <p> · </p>}
                        {timestamp && <p className='small'>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>}
                    </div>

                </div> 
                </div>
            </div>
            </div>
        </div>
        <div className="code">
            {showCode === false  && <button onClick={showCodeText} className='text-center'>Show code for preset submission</button>}
            {showCode &&  <button onClick={hideCodeText} className='text-center'>Hide Code</button>}
            <br />
            {showCode && <div className="code-preview">
                <code>setContent({content}); <br />
                setAuthor({author}); <br />
                setAuthorIcon({authorIcon}); <br />
                setTitle({title}); <br />
                setDesc({desc}); <br />
                setColor({color}); <br />
                setThumb({thumb}); <br />
                setImgUrl({imgUrl}); <br />
                setFooter({footer}); <br />
                setFooterIcon({footerIcon}); <br />
                setTimestamp({timestamp}); <br />
                </code> 
                <br /> <p class='small text-muted'>If the code is not above, please click submit. if you would like to submit a preset for public use, create a ticket in the <a class='text-muted' href="https://www.discord.gg/discortics">Discortics support server</a> and send the code above.</p></div>}
        </div>
    </div>
    
  );
}

export default App;