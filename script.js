$(document).ready(function(){
		
  function stopAllAudio() {
    $('#podcastdiv audio').each(function () {
      this.pause();
      this.currentTime = 0;
    });
	  $('#whichQueenIsSpeaking').text(var0);
  }
  
  
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


  $('.episode, #creatorsp, #documentp').on('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      $(this).click();
    }
  });

const var0 = "";
const var1 = "Zsa Zsa Static Speaking";
const var2 = "Lexington Lush Speaking";
const var3 = "Roxanne Fuego Speaking";
const var4 = "Crimson Cascade Speaking";
const var5 = "Bianca Del Rio Speaking";
const var6 = "Nova Knockout Speaking";

const var7 = "Velvet Voltage Speaking";
const var8 = "Verve 'Vicious' Valentine Speaking";
const var9 = "Vermillion LaRoux Speaking";
const var10 = "Velvet Vortex Speaking";
const var11 = "Violetta Voltage Speaking";

const var12 = "Velvet Voltage → Zsa Zsa Static Speaking";
const var13 = "Verve 'Vicious' Valentine → Lexington Lush Speaking";
const var14 = "Vermillion LaRoux → Roxanne Fuego Speaking";
const var15 = "Velvet Vortex → Crimson Cascade Speaking";
const var16 = "Violetta Voltage → Nova Knockout Speaking";

const varZsaZsa11 = "Born where winter bites and roses grow with thorns,<br>Sofia raised me sharp — I don’t bend, I transform.<br>Nine years in heels higher than your credit score,<br>Built my empire from a broken dressing-room door."
const varZsaZsa12 = "I’m not fire, darling — I’m the current in the wire,<br>While they flicker for attention, I conduct the choir.<br>Luxury can talk, and flames can flare,<br>But I’m the surge in the silence that electrifies the air."
const varZsaZsa13 = "Old-Hollywood glamour with Balkan backbone,<br>Every consonant cut crystal, every vowel overthrown.<br>Remember my name when the lights go erratic…<br>Because I don’t chase the spotlight — I make it automatic."
	
const varLexington11 = "From the fog of London’s streets to the neon’s glow,<br>I traded copper coins for the finest show.<br>Seven years of sharpening every word I speak,<br>While other girls’ vocabularies stay tragically weak.";
const varLexington12 = "I’m Lexington Lush, master of the silver tongue,<br>The high-class anthem that has finally been sung.<br>I don’t just walk—I set the pace of the room,<br>With a brand built on brilliance and a sonic boom.";
const varLexington13 = "Oh, they’re “static” or “fuego” but I’m the gold standard,<br>A linguistic legend that can’t be out-mannered.<br>So listen close to the wealth in every breath I take,<br>I’m here for the crown and the bank I will make!";

const varRoxanne11 = "They call me Roxanne Fuego, born from the bayou’s breath,<br>Where the air smells like bourbon, and beautiful excess,<br>New Orleans raised — the city dances with death,<br>Where every soul is a story and every night is a test.";
const varRoxanne12 = "Eleven years of sequins stitched into my skin,<br>Not a hobby, not a hobby — honey, discipline,<br>NO silver spoon, I had a stage and a dream,<br>Turned every broken thing into diamond that gleam.";
const varRoxanne13 = "I’m not the youngest queen here, I’m seasoned fire —<br>The difference between a sparkler and a funeral pyre.<br>They flash and they fizzle, I build and I burn,<br>Roxanne Fuego, baby — and it’s finally my turn.";

const varCrimson11 = "I’m the Crimson Cascade, born of storm and desire,<br>A Manchester tempest with a tongue that spits fire.<br>Seven years in the game, and I’m still rising higher,<br>A queen forged in chaos, dressed in glamour and satire.";
const varCrimson12 = "I’m the drip of red velvet on a cold steel blade,<br>The hush before impact when a legend is made.<br>Not static, not lush, not a flame that will fade —<br>I’m the flood that arrives when the rules are betrayed.";
const varCrimson13 = "My brand is a rush you know you can’t outrun,<br>A cascade of confidence that blinds like the sun.<br>If you’re thirsty for danger, darling, I’m the one —<br>Because when I start flowing, the show has begun.";

const varBianca11 = "I’m Bianca Del Rio, yo, the queen of the read,<br>Born Roy in New Orleans, where the heat never flees,<br>Cuban fire in my veins, no cap, no plead,<br>A drunk bar friend named me—boom, legend decreed!";
const varBianca12 = "Started slinging barbs in NOLA bars,<br>Hosting bingo for drunks -three PM- raising scars,<br>Moved to the big city, designed costumes like stars,<br>But the stage called me louder—time to show who we are.";
const varBianca13 = "I’m the insult comic with the dimples and a bite,<br>Quick-witted roaster, serving truth day and night,<br>Not here for splits or pretty—I’m here to ignite,<br>The Puerto Rican firecracker? Wait, that’s my right!";

const varNova11 = "I’m Nova Knockout, baby, born loud, not shy,<br>From Barcelona nights where the city lights cry.<br>Started broke in a bedroom with a mirror and a dream,<br>Now my voice paints pictures like a technicolor scream.";
const varNova12 = "No heels on the runway, just my words in your veins,<br>I’m the storm in your speakers, the glitter in your brains.<br>Now others bring the glamour, but I bring the shock,<br>A storyline assassin with a mouth that won’t lock.";
const varNova13 = "I'm broke with big plans and a billionaire tongue,<br>Turning trauma into punchlines, pain into fun.<br>If charisma’s a currency, I’m rich on this track,<br>‘Cause when Nova hits the mic, there’s no going back.";


	$('#initialNote').show();
	$('#aboutTheCreators, #documentHub').hide();
	$('#podcastdiv').hide();
	$('.episodePanel').hide();
    $('.queenIsSpeaking').hide();
	$('#showQueenCheatSheet, #showQueenRankings').hide();
	$('#vvnames, #strikethroughnames, #newnames, #rateaqueen').hide();
    $('#infoOnResearch, #infoOnResponses, #infoOnRateAQueen, #infoConclusion').hide();
    $('#disclaimer').hide();
    $('#wordArtSection').hide();
	
	 $('#episode1').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
            $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide();
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
	        $('#panel1').show();
		    $('.queenIsSpeaking').show();
		    $('#whichQueenIsSpeaking').text(var0);
		    $('#showQueenCheatSheet').hide();
		 	$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		    $('#strikethroughnames').hide();
		    $('#newnames').hide();
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').show();
		    $('#infoOnResponses').hide();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').hide();
		    $('#wordArtSection').hide();
		});
	
     $('#episode2').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide();
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
		    $('#panel2').show();
		    $('.queenIsSpeaking').show();
		    $('#showQueenCheatSheet').show();
		 	$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide();
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').show();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		    
		 		$('#showQueenCheatSheet').off('click').on('click', function(){
		     			    $('#vvnames').show();
						   	$('#strikethroughnames').hide();
						    $('#newnames').hide();
						    $('#rateaqueen').hide();
					
		        }); 
		 
		});
	
	$('#episode3').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide(); 
		    $('#podcastdiv').show(); 
		    $('.episodePanel').hide();
		 	$('#panel3').show();
		    $('.queenIsSpeaking').show();
		    $('#showQueenCheatSheet').show();
			$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide();
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').show();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		    
		 		$('#showQueenCheatSheet').off('click').on('click', function(){
		   			        $('#vvnames').hide();
						   	$('#strikethroughnames').show();
						    $('#newnames').hide();
						    $('#rateaqueen').hide();
		        }); 
		 
		});
	
	$('#episode4').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide(); 
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
		 	$('#panel4').show();
		    $('.queenIsSpeaking').show();
		    $('#showQueenCheatSheet').show();
			$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide();
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').show();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		    
		 		$('#showQueenCheatSheet').off('click').on('click', function(){
		     	            $('#vvnames').hide();
						   	$('#strikethroughnames').hide();
						    $('#newnames').show();
						    $('#rateaqueen').hide(); 
		        }); 
		 
		});
	
	$('#episode5').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide();
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
		 	$('#panel5').show();
		    $('.queenIsSpeaking').show();
		    $('#showQueenCheatSheet').show();
			$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide();
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').show();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		    
		 		$('#showQueenCheatSheet').off('click').on('click', function(){
		                    $('#vvnames').hide();
						   	$('#strikethroughnames').hide();
						    $('#newnames').show();
						    $('#rateaqueen').hide();  
		        }); 
		 
		});
	
	$('#episode6').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide();
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
		 	$('#panel6').show();
		    $('.queenIsSpeaking').show();
		    $('#showQueenCheatSheet').show();
			$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide();
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').show();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		    
		 		$('#showQueenCheatSheet').off('click').on('click', function(){
		                    $('#vvnames').hide();
						   	$('#strikethroughnames').hide();
						    $('#newnames').show();
						    $('#rateaqueen').hide();  
		        }); 
		 
		});
	
	$('#episode7').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide();
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
		 	$('#panel7').show();
		    $('.queenIsSpeaking').show();
		    $('#whichQueenIsSpeaking').text(var0);
		    $('#showQueenCheatSheet').hide();
			$('#showQueenRankings').show();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide(); 
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').hide();
		    $('#infoOnRateAQueen').show();
		    $('#infoConclusion').hide();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		
				$('#showQueenRankings').off('click').on('click', function(){
		                    $('#vvnames').hide();
						   	$('#strikethroughnames').hide();
						    $('#newnames').hide();
						    $('#rateaqueen').show(); 	 
		        }); 
		 
		});
	
	$('#episode8').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
            $(this).addClass('selected');
		    $('#initialNote').hide(); 
		    $('#podcastdiv').show();
		    $('.episodePanel').hide();
		 	$('#panel8').show();
		    $('.queenIsSpeaking').show();
		    $('#whichQueenIsSpeaking').text(var0);
		    $('#showQueenCheatSheet').show();
			$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide(); 
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').hide();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').show();
		    $('#disclaimer').show();
		    $('#wordArtSection').hide();
		
			      $('#showQueenCheatSheet').off('click').on('click', function(){
		                    $('#vvnames').hide();
						   	$('#strikethroughnames').hide();
						    $('#newnames').show();
						    $('#rateaqueen').hide(); 	 
		        });
		 
		});
  
  	$('#bonusUntokened').on('click', function(){
		    stopAllAudio();
		    scrollToTop();
		    $('.episode').removeClass('selected');
			$('#maindiv').hide(); 
		    $('#initialNote').hide(); 
		    $('#podcastdiv').hide();
		    $('.episodePanel').hide();
		    $('.queenIsSpeaking').hide();
		    $('#showQueenCheatSheet').hide();
			$('#showQueenRankings').hide();
		    $('#vvnames').hide();
		   	$('#strikethroughnames').hide();
		    $('#newnames').hide(); 
		    $('#rateaqueen').hide();
		    $('#infoOnResearch').hide();
		    $('#infoOnResponses').hide();
		    $('#infoOnRateAQueen').hide();
		    $('#infoConclusion').hide();
		    $('#disclaimer').hide();
		    $('#wordArtSection').show();
		
			      $('#backtopodcast3').off('click').on('click', function(){
					        stopAllAudio();
					        $('#documentHub, #aboutTheCreators').hide();
					        $('#maindiv').show();
					        $('.episode').removeClass('selected');
					        $('#initialNote').show();
					        $('#podcastdiv').hide();
	                        $('.episodePanel').hide();
					        $('.queenIsSpeaking').hide();
	                        $('#showQueenCheatSheet, #showQueenRankings').hide();
						    $('#vvnames, #strikethroughnames, #newnames, #rateaqueen').hide();
					        $('#infoOnResearch, #infoOnResponses, #infoOnRateAQueen, #infoConclusion').hide();
					        $('#disclaimer').hide();
					        $('#wordArtSection').hide();
					  			  
		              });
		 
		});
	   
	       $('#documentp').on('click', function(){
			                stopAllAudio();
			                $('.episode').removeClass('selected');
			                $('#maindiv').hide(); 		   
                            $('#podcastdiv').hide();
                            $('.episodePanel').hide();
			                $('.queenIsSpeaking').hide();
			                $('#aboutTheCreators').hide();
		                    $('#documentHub').show();
			                $('#wordArtSection').hide();
			   
			      $('#backtopodcast').off('click').on('click', function(){
					        stopAllAudio();
					        $('#documentHub, #aboutTheCreators').hide();
					        $('#maindiv').show();
					        $('.episode').removeClass('selected');
					        $('#initialNote').show();
					        $('#podcastdiv').hide();
	                        $('.episodePanel').hide();
					        $('.queenIsSpeaking').hide(); 
	                        $('#showQueenCheatSheet, #showQueenRankings').hide();
						    $('#vvnames, #strikethroughnames, #newnames, #rateaqueen').hide();
					        $('#infoOnResearch, #infoOnResponses, #infoOnRateAQueen, #infoConclusion').hide();
					        $('#disclaimer').hide();
					        $('#wordArtSection').hide();

		              });
		        });
	
	       $('#creatorsp').on('click', function(){
			                stopAllAudio();
			                $('.episode').removeClass('selected');
			                $('#maindiv').hide();
			                $('#podcastdiv').hide();
                            $('.episodePanel').hide();
			                $('.queenIsSpeaking').hide();
			                $('#aboutTheCreators').show();
		                    $('#documentHub').hide(); 
			   
			      $('#backtopodcast2').off('click').on('click', function(){
					        stopAllAudio();
					        $('#documentHub, #aboutTheCreators').hide();
					        $('#maindiv').show();
					        $('.episode').removeClass('selected');
					        $('#initialNote').show();
					        $('#podcastdiv').hide();
	                        $('.episodePanel').hide();
					        $('.queenIsSpeaking').hide();  
	                        $('#showQueenCheatSheet, #showQueenRankings').hide();
						    $('#vvnames, #strikethroughnames, #newnames, #rateaqueen').hide();
					        $('#infoOnResearch, #infoOnResponses, #infoOnRateAQueen, #infoConclusion').hide();
					        $('#disclaimer').hide();
					        $('#wordArtSection').hide();
		              });
		        });

// ===============================
// SPEAKER + SUBTITLE SYNC
// ===============================

const $speakerLine  = $('#whichQueenIsSpeaking');
const $subtitleLine = $('#panel4Subtitles');

function toSeconds(t) {
  const p = t.split(':').map(Number);
  return p.length === 2 ? p[0] * 60 + p[1] :
         p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : 0;
}

function clearText() {
  $speakerLine.text("");
  $subtitleLine.html("").hide();
}

function setSpeaker(text) {
  $speakerLine.text(text || "");
}

function setSubtitle(html) {
  if (!html) {
    $subtitleLine.html("").hide();
  } else {
    $subtitleLine.html(html).show();
  }
}

/* ===============================
   PANELS 2, 3, 5, 6 — speaker only
   =============================== */

const RANGE_SPEAKER_CUES = {
  panel2: [
    { from: "0:08", to: "1:29", speaker: var7 },
    { from: "1:41", to: "3:02", speaker: var8 },
	{ from: "3:13", to: "4:15", speaker: var9 },
	{ from: "4:24", to: "5:13", speaker: var10 },
	{ from: "5:26", to: "6:20", speaker: var5 },
	{ from: "6:32", to: "6:58", speaker: var11 }
    // narrator gaps are implicit
  ],
  panel3: [
    { from: "0:24", to: "1:53", speaker: var12 },
    { from: "2:07", to: "3:18", speaker: var13 },
	{ from: "3:30", to: "4:57", speaker: var14 },
	{ from: "5:08", to: "5:56", speaker: var15 },
	{ from: "6:08", to: "6:34", speaker: var16 }
  ],
  panel5: [
    { from: "0:16", to: "2:22", speaker: var1 },
	{ from: "2:38", to: "4:38", speaker: var2 },
	{ from: "4:53", to: "7:03", speaker: var3 },
	{ from: "7:19", to: "9:09", speaker: var4 },
	{ from: "9:19", to: "13:20", speaker: var5 },
	{ from: "13:32", to: "15:40", speaker: var6 }
  ],
  panel6: [
    { from: "0:11", to: "2:16", speaker: var1 },
	{ from: "2:27", to: "4:33", speaker: var2 },
	{ from: "4:44", to: "7:45", speaker: var3 },
	{ from: "7:55", to: "10:18", speaker: var4 },
	{ from: "10:30", to: "14:13", speaker: var5 },
	{ from: "14:24", to: "16:34", speaker: var6 }
  ]
};

function wireSpeakerRanges(panelId, ranges) {
  const audio = $('#' + panelId + ' audio.player').get(0);
  if (!audio) return;

  const segs = ranges.map(r => ({
    start: toSeconds(r.from),
    end: toSeconds(r.to),
    speaker: r.speaker
  }));

  let active = -1;

  function apply(t) {
    const idx = segs.findIndex(s => t >= s.start && t < s.end);
    if (idx !== active) {
      active = idx;
      idx === -1 ? clearText() : setSpeaker(segs[idx].speaker);
    }
  }

  $(audio).on('timeupdate', () => apply(audio.currentTime));
  $(audio).on('play', () => apply(audio.currentTime));
  $(audio).on('pause ended', () => { active = -1; clearText(); });
}

Object.entries(RANGE_SPEAKER_CUES).forEach(([id, ranges]) =>
  wireSpeakerRanges(id, ranges)
);

/* ===============================
   PANEL 4 — speaker + subtitles
   =============================== */

const PANEL4_SUBTITLES = [
  { from: "0:35", to: "0:49", speaker: var1, subtitle: varZsaZsa11 },
  { from: "0:51", to: "1:05", speaker: var1, subtitle: varZsaZsa12 },
  { from: "1:07", to: "1:20", speaker: var1, subtitle: varZsaZsa13 },

  { from: "1:42", to: "1:56", speaker: var2, subtitle: varLexington11 },
  { from: "1:59", to: "2:12", speaker: var2, subtitle: varLexington12 },
  { from: "2:15", to: "2:29", speaker: var2, subtitle: varLexington13 },
  
  { from: "2:49", to: "3:02", speaker: var3, subtitle: varRoxanne11 },
  { from: "3:04", to: "3:18", speaker: var3, subtitle: varRoxanne12 },
  { from: "3:19", to: "3:32", speaker: var3, subtitle: varRoxanne13 },
  
  { from: "3:55", to: "4:08", speaker: var4, subtitle: varCrimson11 },
  { from: "4:11", to: "4:24", speaker: var4, subtitle: varCrimson12 },
  { from: "4:26", to: "4:40", speaker: var4, subtitle: varCrimson13 },
  
  { from: "5:01", to: "5:14", speaker: var5, subtitle: varBianca11 },
  { from: "5:16", to: "5:29", speaker: var5, subtitle: varBianca12 },
  { from: "5:31", to: "5:44", speaker: var5, subtitle: varBianca13 },
  
  { from: "6:05", to: "6:19", speaker: var6, subtitle: varNova11 },
  { from: "6:21", to: "6:34", speaker: var6, subtitle: varNova12 },
  { from: "6:36", to: "6:49", speaker: var6, subtitle: varNova13 }

  // narrator gaps = no entries
];

(function wirePanel4() {
  const audio = $('#panel4 audio.player').get(0);
  if (!audio) return;

  const segs = PANEL4_SUBTITLES.map(s => ({
    start: toSeconds(s.from),
    end: toSeconds(s.to),
    speaker: s.speaker,
    subtitle: s.subtitle
  }));

  let active = -1;

  function apply(t) {
    const idx = segs.findIndex(s => t >= s.start && t < s.end);
    if (idx !== active) {
      active = idx;
      if (idx === -1) {
        clearText();
      } else {
        setSpeaker(segs[idx].speaker);
        setSubtitle(segs[idx].subtitle);
      }
    }
  }

  $(audio).on('timeupdate', () => apply(audio.currentTime));
  $(audio).on('play', () => apply(audio.currentTime));
  $(audio).on('pause ended', () => { active = -1; clearText(); });
})();

/* ===============================
   Global safety: one audio at a time
   =============================== */

document.addEventListener('play', e => {
  if (e.target.matches('#podcastdiv audio.player')) {
    $('#podcastdiv audio.player').not(e.target).each(function () {
      this.pause();
      this.currentTime = 0;
    });
    clearText();
  }
}, true);
             
});