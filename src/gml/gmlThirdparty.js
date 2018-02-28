"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.thirdfunctions = {
    //Plugin: MaizeMusic
    //Author: Mage 松仁玉米
    //Website: http://www.magecorn.com
    mm_init: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(path)'
    },
    mm_free: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_music_load: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(path, loop)'
    },
    mm_music_load_ext: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(path, offset, length, loop)'
    },
    mm_music_load_mem: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(path, loop)'
    },
    mm_music_load_mem_ext: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(path, offset, length, loop)'
    },
    mm_music_load_url: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(url)'
    },
    mm_music_free: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_play: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_stop: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_stop_all: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_pause: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_resume: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_set_position: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, position)'
    },
    mm_set_volume: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, volume)'
    },
    mm_set_pan: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, pan_pos)'
    },
    mmm_set_speed: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, spd)'
    },
    mm_set_tempo: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, tempo)'
    },
    mm_set_pitch: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, pitch)'
    },
    mm_set_global_volume: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(volume)'
    },
    mm_set_music_loop_section: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, begin, end)'
    },
    mm_remove_music_loop_section: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_active: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_length: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_position: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_volume: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_pan: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_speed: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_tempo: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_pitch: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_global_volume: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_get_level_left: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_level_right: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_get_data: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, length)'
    },
    mm_get_wave_data: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, length)'
    },
    mm_read_data_mes: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(pos)'
    },
    mm_record_start: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_record_stop: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_record_set_input: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(enabled, volume)'
    },
    mm_record_get_volume: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_effect_set: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, effect)'
    },
    mm_effect_remove: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, effectID)'
    },
    mm_effect_reset: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_effect_set_chorus: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
    mm_effect_set_echo: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, wetdry, feedback, leftdelay, rightdelay, pandelay)'
    },
    mm_effect_set_flanger: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
    mm_effect_set_gargle: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, rate, wave)'
    },
    mm_effect_set_reverb: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, gain, mix, time, ratio)'
    },
    mm_effect_set_compressor: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, gain, attack, release, threshold, ratio, delay)'
    },
    mm_effect_set_equalizer: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(effectID, center, bandwidth, gain)'
    },
    mm_get_cpu: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_get_music_cpu: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID)'
    },
    mm_device_get_number: {
        description: '[Function] (MaizeMusic Plugin)'
    },
    mm_device_get_name: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(device)'
    },
    mm_device_set: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(device)'
    },
    mm_slider_volume: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(musicID, tar_vol, time)'
    },

    //Plugin: FoxWriting
    //Author: NoisyFox
    //Website: https://noisyfox.io
    fw_add_font: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(name, size, bold, italic, stroke)'
    },
    fw_add_font_from_file: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(ttf, size, bold, italic, stroke)'
    },
    fw_delete_font: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(font)'
    },
    fw_preload_font: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(font, from, to)'
    },
    fw_draw_set_font: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(font)'
    },
    fw_draw_set_halign: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(halign)'
    },
    fw_draw_set_valign: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(valign)'
    },
    fw_draw_set_line_spacing: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(sep)'
    },
    fw_enable_pixel_alignment: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(enable)'
    },
    fw_set_font_offset: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(font, xoffset, yoffset)'
    },
    fw_draw_text: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str)'
    },
    fw_draw_text_ext: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, w)'
    },
    fw_draw_text_transformed: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, xscale, yscale, angle)'
    },
    fw_draw_text_ext_transformed: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, w, xscale, yscale, angle)'
    },
    fw_draw_text_color: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, c1, c2, alpha)'
    },
    fw_draw_text_ext_color: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, w, c1, c2, alpha)'
    },
    fw_draw_text_transformed_color: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, xscale, yscale, angle, c1, c2, alpha)'
    },
    fw_draw_text_ext_transformed_color: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(x, y, str, w, xscale, yscale, angle, c1, c2, alpha)'
    },
    fw_string_width: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(str)'
    },
    fw_string_height: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(str)'
    },
    fw_string_width_ext: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(str, sep, w)'
    },
    fw_string_height_ext: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(str, sep, w)'
    },
    fw_release_cache: {
        description: '[Function] (FoxWriting Plugin)'
    },
    fw_set_encoding: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(encodeName)'
    },
    fw_set_encoding_ext: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(codePage)'
    },

    //Plugin: FoxWinShave
    //Author: NoisyFox
    //Website: https://noisyfox.io
    NF_WS_Init: {
        description: '[Function] (FoxWinShave Plugin)'
    },
    NF_WS_ShaveWindow: {
        description: '[Function] (FoxWinShave Plugin)',
        signature: '(sprite, subimage, x, y)'
    },
    NF_WS_ShaveWindowAlpha: {
        description: '[Function] (FoxWinShave Plugin)',
        signature: '(sprite, subimage, x, y, alpha)'
    },
    NF_WS_ResetWindow: {
        description: '[Function] (FoxWinShave Plugin)'
    },
    NF_WS_Free: {
        description: '[Function] (FoxWinShave Plugin)'
    },
};

exports.thirdconstants = {
    //Plugin: MaizeMusic
    //Author: Mage 松仁玉米
    //Website: http://www.magecorn.com
    se_chorus: {
        description: '[Constant] (MaizeMusic Plugin)'
    },
    se_echo: {
        description: '[Constant] (MaizeMusic Plugin)'
    },
    se_flanger: {
        description: '[Constant] (MaizeMusic Plugin)'
    },
    se_gargle: {
        description: '[Constant] (MaizeMusic Plugin)'
    },
    se_compressor: {
        description: '[Constant] (MaizeMusic Plugin)'
    },
    se_equalizer: {
        description: '[Constant] (MaizeMusic Plugin)'
    },

    //Plugin: FoxWriting
    //Author: NoisyFox
    //Website: https://noisyfox.io
    fa_left: {
        description: '[Constant] (FoxWriting Plugin)'
    },
    fa_center: {
        description: '[Constant] (FoxWriting Plugin)'
    },
    fa_right: {
        description: '[Constant] (FoxWriting Plugin)'
    },
    fa_top: {
        description: '[Constant] (FoxWriting Plugin)'
    },
    fa_middle: {
        description: '[Constant] (FoxWriting Plugin)'
    },
    fa_bottom: {
        description: '[Constant] (FoxWriting Plugin)'
    }
}