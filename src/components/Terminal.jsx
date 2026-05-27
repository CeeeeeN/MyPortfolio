<<<<<<< HEAD
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Terminal() {
  const [status, setStatus] = useState('idle');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these three strings with your actual EmailJS IDs
    const SERVICE_ID = 'service_p8js3on';
    const TEMPLATE_ID = 'template_rm8uhxc';
    const PUBLIC_KEY = 'J9pxlmwBR3jQ3eRYH';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('sent');
          e.target.reset();
          setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-16 px-[10%] flex flex-col justify-center border-b border-border relative">
      
      <div className="mb-16 border-l-4 border-tertiary pl-8">
        <h2 className="font-display text-5xl font-black uppercase text-fg">SECURE_UPLINK</h2>
        <div className="font-display text-xs text-tertiary mt-2">ENCRYPTED_CHANNEL // STABLE</div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch max-w-[1200px] mx-auto w-full">
        
        {/* Terminal Form (Left Side) */}
        <div className="bg-black border border-tertiary font-display flex flex-col min-w-0">
          <div className="absolute -mt-6 font-display text-[0.7rem] text-tertiary">
            SECURE UPLINK V3.8 ESTABLISHED
          </div>
          
          <div className="bg-tertiary text-bg px-4 py-1.5 text-[0.7rem] font-black flex justify-between gap-4">
            <span className="truncate">AWAITING_MESSAGE</span>
            <span className="truncate">UPLINK_STATUS: STABLE</span>
          </div>
          
          <div className="p-8 text-tertiary flex-grow flex flex-col">
            <div className="mb-8">[SYSTEM]: INITIALIZING SECURE COMMUNICATION CHANNEL...</div>
            
            {/* Added ref={form} here */}
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col flex-grow">
              
              <div className="flex gap-4 mb-4 items-end">
                <span className="w-[100px] opacity-70 shrink-0">FROM:</span>
                {/* Added name="user_email" */}
                <input type="email" name="user_email" placeholder="Name@email.com" required 
                  className="bg-transparent border-b border-[rgba(0,255,65,0.3)] text-fg font-display w-full outline-none py-1 focus:border-tertiary" />
              </div>
              
              <div className="flex gap-4 mb-8 items-end">
                <span className="w-[100px] opacity-70 shrink-0">SUBJECT:</span>
                {/* Added name="subject" */}
                <input type="text" name="subject" placeholder="Project Inquiry / Collaboration" required 
                  className="bg-transparent border-b border-[rgba(0,255,65,0.3)] text-fg font-display w-full outline-none py-1 focus:border-tertiary" />
              </div>

              {/* Added name="message" */}
              <textarea name="message" placeholder="Tell me about yourself, projects, and goals,..." required 
                className="w-full flex-grow min-h-[150px] bg-transparent border border-[rgba(0,255,65,0.3)] text-fg outline-none p-4 resize-none focus:border-tertiary"></textarea>
              
              <div className="mt-8">
                <button type="submit" disabled={status === 'sending'} 
                  className="clip-send bg-tertiary text-bg px-10 py-3 font-black hover:text-fg hover:bg-transparent hover:border hover:border-tertiary transition-all disabled:opacity-50">
                  {status === 'idle' ? 'SEND_MESSAGE' : 
                   status === 'sending' ? 'ENCRYPTING...' : 
                   status === 'sent' ? 'TRANSMITTED' : 'ERROR_RETRY'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* JSON Editor Socials (Right Side) */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-display text-[0.85rem] flex flex-col min-w-0">
          <div className="bg-[#252526] px-4 py-2.5 flex justify-between items-center text-[#858585] text-[0.75rem] border-b border-tertiary">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div>&lt;/&gt; contact_info.json</div>
          </div>
          
          <div className="flex py-6 flex-grow">
            <div className="px-4 text-[#5a5a5a] text-right select-none border-r border-[#333] leading-[2]">
              {Array.from({length: 12}, (_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="px-6 text-[#d4d4d4] whitespace-pre leading-[2] overflow-x-auto">
              <div><span className="text-[#ffd700]">{`{`}</span></div>
              <div>  <span className="text-[#ce9178] text-base">"status"</span>: <span className="text-[#6a9955] text-base">"OPEN_TO_WORK"</span>,</div>
              <div>  <span className="text-[#ce9178] text-base">"email"</span>: <a href="mailto:chaelsybenj91@gmail.com" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"chaelsybenj91@gmail.com"</a>,</div>
              <div>  <span className="text-[#ce9178] text-base">"socials"</span>: <span className="text-[#ffd700]">{`{`}</span></div>
              <div>    <span className="text-[#ce9178] text-base">"github"</span>: <a href="https://github.com/CeeeeeN" target="_blank" rel="noreferrer" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"@CeeeeeN"</a>,</div>
              <div>    <span className="text-[#ce9178] text-base">"linkedin"</span>: <a href="https://www.linkedin.com/in/chaelsy-benj-7963aa410/" target="_blank" rel="noreferrer" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"Chaelsy Benj"</a>,</div>
              <div>    <span className="text-[#ce9178] text-base">"facebook"</span>: <a href="https://www.facebook.com/CeeDeezaNutz" target="_blank" rel="noreferrer" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"Chaelsy Benj Jumawan"</a></div>
              <div>  <span className="text-[#ffd700]">{`}`}</span>,</div>
              <div>  <span className="text-[#ce9178] text-base">"location"</span>: <span className="text-[#6a9955] text-base">"Valenzuela, Philippines"</span></div>
              <div><span className="text-[#ffd700]">{`}`}</span></div>
              <br />
              <div className="text-[#6a9955] text-base italic opacity-80">// Waiting for connection...</div>
              <div><span className="text-[#ff5f56] animate-[blink_1s_step-end_infinite]">{`_`}</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
=======
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Terminal() {
  const [status, setStatus] = useState('idle');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these three strings with your actual EmailJS IDs
    const SERVICE_ID = 'service_p8js3on';
    const TEMPLATE_ID = 'template_rm8uhxc';
    const PUBLIC_KEY = 'J9pxlmwBR3jQ3eRYH';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('sent');
          e.target.reset();
          setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-16 px-[10%] flex flex-col justify-center border-b border-border relative">
      
      <div className="mb-16 border-l-4 border-tertiary pl-8">
        <h2 className="font-display text-5xl font-black uppercase text-fg">LET'S_CONNECT</h2>
        <div className="font-display text-xs text-tertiary mt-2">ENCRYPTED_CHANNEL // STABLE</div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch max-w-[1200px] mx-auto w-full">
        
        {/* Terminal Form (Left Side) */}
        <div className="bg-black border border-tertiary font-display flex flex-col min-w-0">
          <div className="absolute -mt-6 font-display text-[0.7rem] text-tertiary">
            SECURE UPLINK V3.8 ESTABLISHED
          </div>
          
          <div className="bg-tertiary text-bg px-4 py-1.5 text-[0.7rem] font-black flex justify-between gap-4">
            <span className="truncate">AWAITING_MESSAGE</span>
            <span className="truncate">UPLINK_STATUS: STABLE</span>
          </div>
          
          <div className="p-8 text-tertiary flex-grow flex flex-col">
            <div className="mb-8">[SYSTEM]: INITIALIZING SECURE COMMUNICATION CHANNEL...</div>
            
            {/* Added ref={form} here */}
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col flex-grow">
              
              <div className="flex gap-4 mb-4 items-end">
                <span className="w-[100px] opacity-70 shrink-0">FROM:</span>
                {/* Added name="user_email" */}
                <input type="email" name="user_email" placeholder="Name@email.com" required 
                  className="bg-transparent border-b border-[rgba(0,255,65,0.3)] text-fg font-display w-full outline-none py-1 focus:border-tertiary" />
              </div>
              
              <div className="flex gap-4 mb-8 items-end">
                <span className="w-[100px] opacity-70 shrink-0">SUBJECT:</span>
                {/* Added name="subject" */}
                <input type="text" name="subject" placeholder="Project Inquiry / Collaboration" required 
                  className="bg-transparent border-b border-[rgba(0,255,65,0.3)] text-fg font-display w-full outline-none py-1 focus:border-tertiary" />
              </div>

              {/* Added name="message" */}
              <textarea name="message" placeholder="Tell me about yourself, projects, and goals,..." required 
                className="w-full flex-grow min-h-[150px] bg-transparent border border-[rgba(0,255,65,0.3)] text-fg outline-none p-4 resize-none focus:border-tertiary"></textarea>
              
              <div className="mt-8">
                <button type="submit" disabled={status === 'sending'} 
                  className="clip-send bg-tertiary text-bg px-10 py-3 font-black hover:text-fg hover:bg-transparent hover:border hover:border-tertiary transition-all disabled:opacity-50">
                  {status === 'idle' ? 'SEND_MESSAGE' : 
                   status === 'sending' ? 'ENCRYPTING...' : 
                   status === 'sent' ? 'TRANSMITTED' : 'ERROR_RETRY'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* JSON Editor Socials (Right Side) */}
        <div className="bg-[#1e1e1e] rounded-lg border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-display text-[0.85rem] flex flex-col min-w-0">
          <div className="bg-[#252526] px-4 py-2.5 flex justify-between items-center text-[#858585] text-[0.75rem] border-b border-tertiary">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div>&lt;/&gt; contact_info.json</div>
          </div>
          
          <div className="flex py-6 flex-grow">
            <div className="px-4 text-[#5a5a5a] text-right select-none border-r border-[#333] leading-[2]">
              {Array.from({length: 12}, (_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="px-6 text-[#d4d4d4] whitespace-pre leading-[2] overflow-x-auto">
              <div><span className="text-[#ffd700]">{`{`}</span></div>
              <div>  <span className="text-[#ce9178] text-base">"status"</span>: <span className="text-[#6a9955] text-base">"OPEN_TO_WORK"</span>,</div>
              <div>  <span className="text-[#ce9178] text-base">"email"</span>: <a href="mailto:chaelsybenj91@gmail.com" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"chaelsybenj91@gmail.com"</a>,</div>
              <div>  <span className="text-[#ce9178] text-base">"socials"</span>: <span className="text-[#ffd700]">{`{`}</span></div>
              <div>    <span className="text-[#ce9178] text-base">"github"</span>: <a href="https://github.com/CeeeeeN" target="_blank" rel="noreferrer" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"@CeeeeeN"</a>,</div>
              <div>    <span className="text-[#ce9178] text-base">"linkedin"</span>: <a href="https://www.linkedin.com/in/chaelsy-benj-7963aa410/" target="_blank" rel="noreferrer" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"Chaelsy Benj"</a>,</div>
              <div>    <span className="text-[#ce9178] text-base">"facebook"</span>: <a href="https://www.facebook.com/CeeDeezaNutz" target="_blank" rel="noreferrer" className="text-[#6a9955] text-base hover:underline hover:text-white transition-colors">"Chaelsy Benj Jumawan"</a></div>
              <div>  <span className="text-[#ffd700]">{`}`}</span>,</div>
              <div>  <span className="text-[#ce9178] text-base">"location"</span>: <span className="text-[#6a9955] text-base">"Valenzuela, Philippines"</span></div>
              <div><span className="text-[#ffd700]">{`}`}</span></div>
              <br />
              <div className="text-[#6a9955] text-base italic opacity-80">// Waiting for connection...</div>
              <div><span className="text-[#ff5f56] animate-[blink_1s_step-end_infinite]">{`_`}</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
>>>>>>> c03efe5 (additions)
}