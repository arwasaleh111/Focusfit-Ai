const form = document.getElementById('profile-form');
const noise = document.getElementById('noise');
const noiseValue = document.getElementById('noise-value');
const results = document.getElementById('results');
const labels = {task:{reading:'reading / theory',problem:'problem solving',writing:'writing / creating'},sound:{quiet:'quiet',steady:'steady background sound',music:'instrumental music'},light:{bright:'bright light',soft:'soft warm light',natural:'natural daylight'}};

function selected(name){return document.querySelector(`input[name="${name}"]:checked`).value}
function updateNoise(){const n=Number(noise.value);noiseValue.textContent=n<28?'Quiet':n<66?'Moderate':'Noisy'}
noise.addEventListener('input',updateNoise);updateNoise();

function buildPlan(){
  const task=selected('task'), sound=selected('sound'), light=selected('light'), session=Number(selected('session')), n=Number(noise.value);
  let title='The Balanced Focus Setup';
  if(sound==='quiet' && n>=60) title='The Noise-Buffer Setup';
  else if(task==='problem' && session>=45) title='The Deep-Work Setup';
  else if(task==='reading' && sound==='quiet') title='The Calm Reading Setup';
  else if(task==='writing' && sound==='music') title='The Creative Flow Setup';

  let soundTitle, soundCopy;
  if(n>=66){soundTitle='Reduce interruptions';soundCopy='If possible, move away from the main noise source. Try a quieter corner or comfortable hearing protection if appropriate. If moving is not possible, use short focus blocks and pause when the noise becomes distracting.'}
  else if(sound==='quiet'){soundTitle='Keep the soundscape simple';soundCopy='Silence notifications and choose the quietest available spot. If sudden sounds interrupt you, face away from the busiest part of the room.'}
  else if(sound==='steady'){soundTitle='Use one consistent sound';soundCopy='Try a fan or gentle, steady ambient sound at a comfortable low volume. Keep it consistent rather than changing tracks while working.'}
  else {soundTitle='Instrumental, kept low';soundCopy='Choose familiar instrumental music without lyrics and keep the volume low enough that it does not compete with reading or thinking.'}

  let lightTitle, lightCopy;
  if(light==='bright'){lightTitle='Clear, even lighting';lightCopy='Light the page or keyboard evenly and reduce screen glare. Avoid a bright screen in an otherwise dark room.'}
  else if(light==='soft'){lightTitle='Warm, gentle lighting';lightCopy='Use comfortable, diffuse light and remove visual clutter from the immediate desk area. Keep the text easy to see without glare.'}
  else {lightTitle='Use daylight thoughtfully';lightCopy='Sit near a window if practical, with the screen positioned to avoid reflections. Add a desk light if the page is still hard to see.'}

  const rhythmTitle=`${session}-minute focus blocks`;
  const rhythmCopy=session===15?'Start with one 15-minute task. Take a 3–5 minute movement or water break, then decide whether to repeat.':session===25?'Work on one clearly defined task for 25 minutes, then take a 5-minute break away from the screen.':'Try a 45-minute deep-work block only if it feels comfortable. Take a 5–10 minute break and split the task if attention drops.';
  let taskAdvice=task==='reading'?'Keep only the current reading and a small note sheet on the desk. After each section, write one sentence in your own words.':task==='problem'?'Keep scratch paper and only the tools needed for the current problem visible. Attempt the problem before checking a worked example.':'Keep a short outline visible, gather reference tabs before starting, and draft first without polishing every sentence.';
  let soundReason=sound==='quiet'?'you prefer quiet':sound==='steady'?'you prefer steady background sound':'you prefer instrumental music';
  let lightReason=light==='bright'?'bright lighting':light==='soft'?'softer lighting':'natural daylight';
  const summary=`A practical setup for ${labels.task[task]}, built around ${soundReason} and ${lightReason}. Treat it as a starting point and adjust after one session.`;
  const why=`Your plan combines your task (${labels.task[task]}), your sound preference (${labels.sound[sound]}), your lighting preference (${labels.light[light]}), and a self-estimated room noise level of ${n}/100. ${taskAdvice} The recommendations are transparent preference-matching rules, so you can see why each suggestion appeared and change anything that does not help.`;

  document.getElementById('result-title').textContent=title;
  document.getElementById('result-summary').textContent=summary;
  document.getElementById('sound-title').textContent=soundTitle;
  document.getElementById('sound-copy').textContent=soundCopy;
  document.getElementById('light-title').textContent=lightTitle;
  document.getElementById('light-copy').textContent=lightCopy;
  document.getElementById('rhythm-title').textContent=rhythmTitle;
  document.getElementById('rhythm-copy').textContent=rhythmCopy;
  document.getElementById('why-copy').textContent=why;
  results.classList.remove('hidden');
  results.scrollIntoView({behavior:'smooth',block:'start'});
}
form.addEventListener('submit',e=>{e.preventDefault();buildPlan()});
document.getElementById('edit-profile').addEventListener('click',()=>{document.querySelector('.workspace').scrollIntoView({behavior:'smooth'});results.classList.add('hidden')});
document.getElementById('copy-plan').addEventListener('click',async()=>{
 const text=`FocusFit AI — ${document.getElementById('result-title').textContent}\n${document.getElementById('result-summary').textContent}\n\nSOUND: ${document.getElementById('sound-title').textContent}\n${document.getElementById('sound-copy').textContent}\n\nLIGHT & DESK: ${document.getElementById('light-title').textContent}\n${document.getElementById('light-copy').textContent}\n\nSTUDY RHYTHM: ${document.getElementById('rhythm-title').textContent}\n${document.getElementById('rhythm-copy').textContent}\n\nWHY: ${document.getElementById('why-copy').textContent}`;
 try{await navigator.clipboard.writeText(text);document.getElementById('copy-status').textContent='Plan copied!'}
 catch(e){document.getElementById('copy-status').textContent='Select and copy the plan text manually if clipboard access is blocked.'}
});
