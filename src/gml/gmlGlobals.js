"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const datasimple = require("../../data/data.simple.json");
const localizationset = vscode_1.workspace.getConfiguration('gmlsupport').get('localization');
const i18n = require("../../data/i18n/" + localizationset + "/gmlGlobals.json")
const i18n_notice = require("../../data/i18n/" + localizationset + "/gmlNotices.json")

exports.globalfunctions = {
    abs: {
        description: '[Function]' + i18n.abs.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.abs.x }
        ],
		signature: '(x)'
	},
	achievement_available: {
		description: '[Function]' + i18n.achievement_available.desc,
        available: datasimple.gms1
	},
	achievement_event: {
        description: '[Function]' + i18n.achievement_event.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stringid', documentation: i18n.achievement_event.stringid }
        ],
		signature: '(stringid)'
	},
	achievement_get_challenges: {
		description: '[Function]' + i18n.achievement_get_challenges.desc,
        available: datasimple.gms1
	},
	achievement_get_info: {
        description: '[Function]' + i18n.achievement_get_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'userid', documentation: i18n.achievement_get_info.userid }
        ],
		signature: '(userid)'
	},
	achievement_get_pic: {
        description: '[Function]' + i18n.achievement_get_pic.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'char', documentation: i18n.achievement_get_pic.char }
        ],
		signature: '(char)'
	},
	achievement_increment: {
        description: '[Function]' + i18n.achievement_increment.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'achievement_name', documentation: i18n.achievement_increment.achievement_name },
            { label: 'value', documentation: i18n.achievement_increment.value }
        ],
		signature: '(achievement_name, value)'
	},
	achievement_load_friends: {
		description: '[Function]' + i18n.achievement_load_friends.desc,
        available: datasimple.gms1
	},
	achievement_load_leaderboard: {
        description: '[Function]' + i18n.achievement_load_leaderboard.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ident', documentation: i18n.achievement_load_leaderboard.ident },
            { label: 'minindex', documentation: i18n.achievement_load_leaderboard.minindex },
            { label: 'maxindex', documentation: i18n.achievement_load_leaderboard.maxindex },
            { label: 'filter', documentation: i18n.achievement_load_leaderboard.filter }
        ],
		signature: '(ident, minindex, maxindex, filter)'
	},
	achievement_load_progress: {
		description: '[Function]' + i18n.achievement_load_progress.desc,
        available: datasimple.gms1
	},
	achievement_login: {
		description: '[Function]' + i18n.achievement_login.desc,
        available: datasimple.gms1
	},
	achievement_login_status: {
		description: '[Function]' + i18n.achievement_login_status.desc,
        available: datasimple.gms1
	},
	achievement_logout: {
		description: '[Function]' + i18n.achievement_logout.desc,
        available: datasimple.gms1
	},
	achievement_post: {
        description: '[Function]' + i18n.achievement_post.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'achievement_name', documentation: i18n.achievement_post.achievement_name },
            { label: 'value', documentation: i18n.achievement_post.value }
        ],
		signature: '(achievement_name, value)'
	},
	achievement_post_score: {
        description: '[Function]' + i18n.achievement_post_score.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'score_name', documentation: i18n.achievement_post_score.score_name },
            { label: 'value', documentation: i18n.achievement_post_score.value }
        ],
		signature: '(score_name, value)'
	},
	achievement_reset: {
		description: '[Function]' + i18n.achievement_reset.desc,
        available: datasimple.gms1
	},
	achievement_send_challenge: {
        description: '[Function]' + i18n.achievement_send_challenge.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'to', documentation: i18n.achievement_send_challenge.to },
            { label: 'challengeid', documentation: i18n.achievement_send_challenge.challengeid },
            { label: 'score', documentation: i18n.achievement_send_challenge.score },
            { label: 'type', documentation: i18n.achievement_send_challenge.type },
            { label: 'msg', documentation: i18n.achievement_send_challenge.msg }
        ],
		signature: '(to, challengeid, score, type, msg)'
	},
	achievement_show: {
        description: '[Function]' + i18n.achievement_show.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.achievement_show.type },
            { label: 'val', documentation: i18n.achievement_show.val }
        ],
		signature: '(type, val)'
	},
	achievement_show_achievements: {
		description: '[Function]' + i18n.achievement_show_achievements.desc,
        available: datasimple.gms1
	},
	achievement_show_challenge_notifications: {
        description: '[Function]' + i18n.achievement_show_challenge_notifications.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'receive_challenge', documentation: i18n.achievement_show_challenge_notifications.receive_challenge },
            { label: 'local_complete', documentation: i18n.achievement_show_challenge_notifications.local_complete },
            { label: 'remote_complete', documentation: i18n.achievement_show_challenge_notifications.remote_complete }
        ],
		signature: '(receive_challenge, local_complete, remote_complete)'
	},
	achievement_show_leaderboards: {
		description: '[Function]' + i18n.achievement_show_leaderboards.desc,
        available: datasimple.gms1
	},
	alarm_get: {
        description: '[Function]' + i18n.alarm_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.alarm_get.index }
        ],
		signature: '(index)'
	},
	alarm_set: {
        description: '[Function]' + i18n.alarm_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.alarm_set.index },
            { label: 'count', documentation: i18n.alarm_set.count }
        ],
		signature: '(index, count)'
	},
	angle_difference: {
        description: '[Function]' + i18n.angle_difference.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src', documentation: i18n.angle_difference.src },
            { label: 'dest', documentation: i18n.angle_difference.dest }
        ],
		signature: '(src, dest)'
	},
	ansi_char: {
        description: '[Function]' + i18n.ansi_char.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.ansi_char.val }
        ],
		signature: '(val)'
	},
	application_get_position: {
		description: '[Function]' + i18n.application_get_position.desc,
        available: datasimple.gms1
	},
	application_surface_draw_enable: {
        description: '[Function]' + i18n.application_surface_draw_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'on_off', documentation: i18n.application_surface_draw_enable.on_off }
        ],
		signature: '(on_off)'
	},
	application_surface_enable: {
        description: '[Function]' + i18n.application_surface_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.application_surface_enable.enable }
        ],
		signature: '(enable)'
	},
	application_surface_is_enabled: {
		description: '[Function]' + i18n.application_surface_is_enabled.desc,
        available: datasimple.gms1
	},
	arccos: {
        description: '[Function]' + i18n.arccos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.arccos.x }
        ],
		signature: '(x)'
	},
	arcsin: {
        description: '[Function]' + i18n.arcsin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.arcsin.x }
        ],
		signature: '(x)'
	},
	arctan: {
        description: '[Function]' + i18n.arctan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.arctan.x }
        ],
		signature: '(x)'
	},
	arctan2: {
        description: '[Function]' + i18n.arctan2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'y', documentation: i18n.arctan2.y },
            { label: 'x', documentation: i18n.arctan2.x }
        ],
		signature: '(y, x)'
	},
	array_copy: {
        description: '[Function]' + i18n.array_copy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dest', documentation: i18n.array_copy.dest },
            { label: 'dest_index', documentation: i18n.array_copy.dest_index },
            { label: 'src', documentation: i18n.array_copy.src },
            { label: 'src_index', documentation: i18n.array_copy.src_index },
            { label: 'length', documentation: i18n.array_copy.length }
        ],
		signature: '(dest, dest_index, src, src_index, length)'
	},
	array_create: {
        description: '[Function]' + i18n.array_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'size', documentation: i18n.array_create.size }
        ],
		signature: '(size)'
	},
	array_equals: {
        description: '[Function]' + i18n.array_equals.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'var1', documentation: i18n.array_equals.var1 },
            { label: 'var2', documentation: i18n.array_equals.var2 }
        ],
		signature: '(var1, var2)'
	},
	array_height_2d: {
        description: '[Function]' + i18n.array_height_2d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'variable', documentation: i18n.array_height_2d.variable }
        ],
		signature: '(variable)'
	},
	array_length_1d: {
        description: '[Function]' + i18n.array_length_1d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'variable', documentation: i18n.array_length_1d.variable }
        ],
		signature: '(variable)'
	},
	array_length_2d: {
        description: '[Function]' + i18n.array_length_2d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'variable', documentation: i18n.array_length_2d.variable },
            { label: 'index', documentation: i18n.array_length_2d.index }
        ],
		signature: '(variable, index)'
	},
	asset_get_index: {
        description: '[Function]' + i18n.asset_get_index.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n.asset_get_index.name }
        ],
		signature: '(name)'
	},
	asset_get_type: {
        description: '[Function]' + i18n.asset_get_type.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n.asset_get_type.name }
        ],
		signature: '(name)'
	},
	audio_channel_num: {
        description: '[Function]' + i18n.audio_channel_num.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'numchannels', documentation: i18n.audio_channel_num.numchannels }
        ],
		signature: '(numchannels)'
	},
	audio_create_buffer_sound: {
        description: '[Function]' + i18n.audio_create_buffer_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferId', documentation: i18n.audio_create_buffer_sound.bufferId },
            { label: 'format', documentation: i18n.audio_create_buffer_sound.format },
            { label: 'offset', documentation: i18n.audio_create_buffer_sound.offset },
            { label: 'src_index', documentation: i18n.audio_create_buffer_sound.src_index },
            { label: 'length', documentation: i18n.audio_create_buffer_sound.length },
            { label: 'channels', documentation: i18n.audio_create_buffer_sound.channels }
        ],
		signature: '(bufferId, format, rate, offset, length, channels)'
	},
	audio_create_play_queue: {
        description: '[Function]' + i18n.audio_create_play_queue.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferFormat', documentation: i18n.audio_create_play_queue.bufferFormat },
            { label: 'sampleRate', documentation: i18n.audio_create_play_queue.sampleRate },
            { label: 'channels', documentation: i18n.audio_create_play_queue.channels }
        ],
		signature: '(bufferFormat, sampleRate, channels)'
	},
	audio_create_stream: {
        description: '[Function]' + i18n.audio_create_stream.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.audio_create_stream.filename }
        ],
		signature: '(filename)'
	},
	audio_create_sync_group: {
        description: '[Function]' + i18n.audio_create_stream.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'looping', documentation: i18n.audio_create_stream.looping }
        ],
		signature: '(looping)'
	},
	audio_debug: {
        description: '[Function]' + i18n.audio_debug.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.audio_debug.enable }
        ],
		signature: '(enable)'
	},
	audio_destroy_stream: {
        description: '[Function]' + i18n.audio_destroy_stream.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stream_sound_id', documentation: i18n.audio_destroy_stream.stream_sound_id }
        ],
		signature: '(stream_sound_id)'
	},
	audio_destroy_sync_group: {
        description: '[Function]' + i18n.audio_destroy_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_destroy_sync_group.sync_group_id }
        ],
		signature: '(sync_group_id)'
	},
	audio_emitter_create: {
		description: '[Function]' + i18n.audio_emitter_create.desc,
        available: datasimple.gms1
	},
	audio_emitter_exists: {
        description: '[Function]' + i18n.audio_emitter_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_exists.emitterid }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_falloff: {
        description: '[Function]' + i18n.audio_emitter_falloff.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_falloff.emitterid },
            { label: 'falloff_ref_dist', documentation: i18n.audio_emitter_falloff.falloff_ref_dist },
            { label: 'falloff_max_dist', documentation: i18n.audio_emitter_falloff.falloff_max_dist },
            { label: 'falloff_factor', documentation: i18n.audio_emitter_falloff.falloff_factor }
        ],
		signature: '(emitterid, falloff_ref_dist, falloff_max_dist, falloff_factor)'
	},
	audio_emitter_free: {
        description: '[Function]' + i18n.audio_emitter_free.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_free.emitterid }
        ],
		signature: '(emitterid)'
	},
	audio_emitter_gain: {
        description: '[Function]' + i18n.audio_emitter_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_gain.emitterid },
            { label: 'gain', documentation: i18n.audio_emitter_gain.gain }
        ],
		signature: '(emitterid, gain)'
	},
	audio_emitter_get_gain: {
        description: '[Function]' + i18n.audio_emitter_get_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_gain.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_listener_mask: {
        description: '[Function]' + i18n.audio_emitter_get_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_listener_mask.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_pitch: {
        description: '[Function]' + i18n.audio_emitter_get_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_pitch.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vx: {
        description: '[Function]' + i18n.audio_emitter_get_vx.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_vx.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vy: {
        description: '[Function]' + i18n.audio_emitter_get_vy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_vy.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_vz: {
        description: '[Function]' + i18n.audio_emitter_get_vz.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_vz.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_x: {
        description: '[Function]' + i18n.audio_emitter_get_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_x.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_y: {
        description: '[Function]' + i18n.audio_emitter_get_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_y.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_get_z: {
        description: '[Function]' + i18n.audio_emitter_get_z.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_get_z.emitterid },
        ],
		signature: '(emitterid)'
	},
	audio_emitter_pitch: {
        description: '[Function]' + i18n.audio_emitter_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_pitch.emitterid },,
            { label: 'pitch', documentation: i18n.audio_emitter_pitch.pitch }
        ],
		signature: '(emitterid, pitch)'
	},
	audio_emitter_position: {
        description: '[Function]' + i18n.audio_emitter_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_position.emitterid },,
            { label: 'x', documentation: i18n.audio_emitter_position.x },
            { label: 'y', documentation: i18n.audio_emitter_position.y },
            { label: 'z', documentation: i18n.audio_emitter_position.z }
        ],
		signature: '(emitterid, x, y, z)'
	},
	audio_emitter_set_listener_mask: {
        description: '[Function]' + i18n.audio_emitter_set_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_set_listener_mask.emitterid },,
            { label: 'mask', documentation: i18n.audio_emitter_set_listener_mask.mask }
        ],
		signature: '(emitterid, mask)'
	},
	audio_emitter_velocity: {
        description: '[Function]' + i18n.audio_emitter_velocity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_emitter_velocity.emitterid },,
            { label: 'vx', documentation: i18n.audio_emitter_velocity.vx },
            { label: 'vy', documentation: i18n.audio_emitter_velocity,vy },
            { label: 'vz', documentation: i18n.audio_emitter_velocity.vz }
        ],
		signature: '(emitterid, vx, vy, vz)'
	},
	audio_exists: {
        description: '[Function]' + i18n.audio_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_exists.soundid }
        ],
		signature: '(soundid)'
	},
	audio_falloff_set_model: {
        description: '[Function]' + i18n.audio_falloff_set_model.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'falloffmode', documentation: i18n.audio_falloff_set_model.falloffmode }
        ],
		signature: '(falloffmode)'
	},
	audio_free_buffer_sound: {
        description: '[Function]' + i18n.audio_free_buffer_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_free_buffer_sound.soundid }
        ],
		signature: '(soundId)'
	},
	audio_free_play_queue: {
        description: '[Function]' + i18n.audio_free_play_queue.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'queueid', documentation: i18n.audio_free_play_queue.queueid }
        ],
		signature: '(queueId)'
	},
	audio_get_listener_count: {
		description: '[Function]' + i18n.audio_get_listener_count.desc,
        available: datasimple.gms1
	},
	audio_get_listener_info: {
        description: '[Function]' + i18n.audio_get_listener_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_get_listener_info.index }
        ],
		signature: '(index)'
	},
	audio_get_listener_mask: {
        description: '[Function]' + i18n.audio_get_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'mask', documentation: i18n.audio_get_listener_mask.mask }
        ],
		signature: '(mask)'
	},
	audio_get_master_gain: {
        description: '[Function]' + i18n.audio_get_master_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'listenerIndex', documentation: i18n.audio_get_master_gain.listenerIndex }
        ],
		signature: '(listenerIndex)'
	},
	audio_get_name: {
        description: '[Function]' + i18n.audio_get_name.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_get_name.index }
        ],
		signature: '(index)'
	},
	audio_get_recorder_count: {
		description: '[Function]' + i18n.audio_get_recorder_count.desc,
        available: datasimple.gms1
	},
	audio_get_recorder_info: {
        description: '[Function]' + i18n.audio_get_recorder_info.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'recorder_num', documentation: i18n.audio_get_recorder_info.recorder_num }
        ],
		signature: '(recorder_num)'
	},
	audio_get_type: {
        description: '[Function]' + i18n.audio_get_type.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_get_type.soundid }
        ],
		signature: '(soundid)'
	},
	audio_group_is_loaded: {
        description: '[Function]' + i18n.audio_group_is_loaded.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_is_loaded.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_load: {
        description: '[Function]' + i18n.audio_group_load.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_load.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_load_progress: {
        description: '[Function]' + i18n.audio_group_load_progress.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_load_progress.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_name: {
        description: '[Function]' + i18n.audio_group_name.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_name.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_set_gain: {
        description: '[Function]' + i18n.audio_group_set_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_set_gain.groupId },
            { label: 'volume', documentation: i18n.audio_group_set_gain.volume },
            { label: 'time', documentation: i18n.audio_group_set_gain.time }
        ],
		signature: '(groupId, volume, time)'
	},
	audio_group_stop_all: {
        description: '[Function]' + i18n.audio_group_stop_all.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_stop_all.groupId }
        ],
		signature: '(groupId)'
	},
	audio_group_unload: {
        description: '[Function]' + i18n.audio_group_unload.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupId', documentation: i18n.audio_group_unload.groupId }
        ],
		signature: '(groupId)'
	},
	audio_is_paused: {
        description: '[Function]' + i18n.audio_is_paused.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_is_paused.soundid }
        ],
        signature: '(soundid)'
    },
	audio_is_playing: {
        description: '[Function]' + i18n.audio_is_playing.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_is_playing.soundid }
        ],
        signature: '(soundid)'
    },
	audio_listener_get_data: {
        description: '[Function]' + i18n.audio_listener_get_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_get_data.index }
        ],
        signature: '(index)'
    },
	audio_listener_orientation: {
        description: '[Function]' + i18n.audio_listener_orientation.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lookat_x', documentation: i18n.audio_listener_orientation.lookat_x },
            { label: 'lookat_y', documentation: i18n.audio_listener_orientation.lookat_y },
            { label: 'lookat_z', documentation: i18n.audio_listener_orientation.lookat_z },
            { label: 'up_x', documentation: i18n.audio_listener_orientation.up_x },
            { label: 'up_y', documentation: i18n.audio_listener_orientation.up_y },
            { label: 'up_z', documentation: i18n.audio_listener_orientation.up_z }
        ],
        signature: '(lookat_x, lookat_y, lookat_z, up_x, up_y, up_z)'
    },
	audio_listener_position: {
        description: '[Function]' + i18n.audio_listener_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.audio_listener_position.x },
            { label: 'y', documentation: i18n.audio_listener_position.y },
            { label: 'z', documentation: i18n.audio_listener_position.z }
        ],
        signature: '(x, y, z)'
    },
	audio_listener_set_orientation: {
        description: '[Function]' + i18n.audio_listener_set_orientation.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_set_orientation.index },
            { label: 'lookat_x', documentation: i18n.audio_listener_set_orientation.lookat_x },
            { label: 'lookat_y', documentation: i18n.audio_listener_set_orientation.lookat_y },
            { label: 'lookat_z', documentation: i18n.audio_listener_set_orientation.lookat_z },
            { label: 'up_x', documentation: i18n.audio_listener_set_orientation.up_x },
            { label: 'up_y', documentation: i18n.audio_listener_set_orientation.up_y },
            { label: 'up_z', documentation: i18n.audio_listener_set_orientation.up_z }
        ],
        signature: '(index, lookat_x, lookat_y, lookat_z, up_x, up_y, up_z)'
    },
	audio_listener_set_position: {
        description: '[Function]' + i18n.audio_listener_set_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_set_position.index },
            { label: 'x', documentation: i18n.audio_listener_set_position.x },
            { label: 'y', documentation: i18n.audio_listener_set_position.y },
            { label: 'z', documentation: i18n.audio_listener_set_position.z }
        ],
        signature: '(index, x, y, z)'
    },
	audio_listener_set_velocity: {
        description: '[Function]' + i18n.audio_listener_set_velocity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_listener_set_velocity.index },
            { label: 'vx', documentation: i18n.audio_listener_set_velocity.vx },
            { label: 'vy', documentation: i18n.audio_listener_set_velocity.vy },
            { label: 'vz', documentation: i18n.audio_listener_set_velocity.vz }
        ],
        signature: '(index, vx, vy, vz)'
    },
	audio_listener_velocity: {
        description: '[Function]' + i18n.audio_listener_velocity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vx', documentation: i18n.audio_listener_velocity.vx },
            { label: 'vy', documentation: i18n.audio_listener_velocity.vy },
            { label: 'vz', documentation: i18n.audio_listener_velocity.vz }
        ],
        signature: '(vx, vy, vz)'
    },
	audio_master_gain: {
        description: '[Function]' + i18n.audio_master_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'gain', documentation: i18n.audio_master_gain.gain }
        ],
        signature: '(gain)'
    },
	audio_pause_all: {
        description: '[Function]' + i18n.audio_pause_all.desc,
        available: datasimple.gms1
    },
	audio_pause_sound: {
        description: '[Function]' + i18n.audio_pause_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_pause_sound.soundid }
        ],
        signature: '(soundid)'
    },
	audio_pause_sync_group: {
        description: '[Function]' + i18n.audio_pause_sync_grou.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_pause_sync_grou.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_play_in_sync_group: {
        description: '[Function]' + i18n.audio_play_in_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_play_in_sync_group.sync_group_id },
            { label: 'soundid', documentation: i18n.audio_play_in_sync_group.soundid }
        ],
        signature: '(sync_group_id, soundid)'
    },
	audio_play_sound: {
        description: '[Function]' + i18n.audio_play_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_play_sound.soundid },
            { label: 'priority', documentation: i18n.audio_play_sound.priority },
            { label: 'loops', documentation: i18n.audio_play_sound.loops }
        ],
        signature: '(soundid, priority, loops)'
    },
	audio_play_sound_at: {
        description: '[Function]' + i18n.audio_play_sound_at.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_play_sound_at.soundid },
            { label: 'x', documentation: i18n.audio_play_sound_at.x },
            { label: 'y', documentation: i18n.audio_play_sound_at.y },
            { label: 'z', documentation: i18n.audio_play_sound_at.z },
            { label: 'falloff_ref_dist', documentation: i18n.audio_play_sound_at.falloff_ref_dist },
            { label: 'falloff_max_dist', documentation: i18n.audio_play_sound_at.falloff_max_dist },
            { label: 'falloff_factor', documentation: i18n.audio_play_sound_at.falloff_factor },
            { label: 'loops', documentation: i18n.audio_play_sound_at.loops },
            { label: 'priority', documentation: i18n.audio_play_sound_at.priority }
        ],
        signature: '(soundid, x, y, z, falloff_ref_dist, falloff_max_dist, falloff_factor, loops, priority)'
    },
	audio_play_sound_on: {
        description: '[Function]' + i18n.audio_play_sound_on.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'emitterid', documentation: i18n.audio_play_sound_on.emitterid },,
            { label: 'soundid', documentation: i18n.audio_play_sound_on.soundid },
            { label: 'priority', documentation: i18n.audio_play_sound_on.priority },
            { label: 'loops', documentation: i18n.audio_play_sound_on.loops }
        ],
        signature: '(emitterid, soundid, loops, priority)'
    },
	audio_queue_sound: {
        description: '[Function]' + i18n.audio_queue_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'queueid', documentation: i18n.audio_queue_sound.queueid },
            { label: 'buffer_id', documentation: i18n.audio_queue_sound.buffer_id },
            { label: 'offset', documentation: i18n.audio_queue_sound.offset },
            { label: 'length', documentation: i18n.audio_queue_sound.length }
        ],
        signature: '(queueId, buffer_id, offset, length)'
    },
	audio_resume_all: {
        description: '[Function]' + i18n.audio_resume_all.desc,
        available: datasimple.gms1
    },
	audio_resume_sound: {
        description: '[Function]' + i18n.audio_resume_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_resume_sound.soundid }
        ],
        signature: '(soundid)'
    },
	audio_resume_sync_group: {
        description: '[Function]' + i18n.audio_resume_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_resume_sync_group.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_set_listener_mask: {
        description: '[Function]' + i18n.audio_set_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'mask', documentation: i18n.audio_set_listener_mask.mask }
        ],
        signature: '(mask)'
    },
	audio_set_master_gain: {
        description: '[Function]' + i18n.audio_set_master_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'listenerIndex', documentation: i18n.audio_set_master_gain.listenerIndex },
            { label: 'gain', documentation: i18n.audio_set_master_gain.gain }
        ],
        signature: '(listenerIndex, gain)'
    },
	audio_sound_gain: {
        description: '[Function]' + i18n.audio_sound_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_gain.index },
            { label: 'volume', documentation: i18n.audio_sound_gain.volume },
            { label: 'time', documentation: i18n.audio_sound_gain.time }
        ],
        signature: '(index, volume, time)'
    },
	audio_sound_get_gain: {
        description: '[Function]' + i18n.audio_sound_get_gain.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_get_gain.index }
        ],
        signature: '(index)'
    },
	audio_sound_get_listener_mask: {
        description: '[Function]' + i18n.audio_sound_get_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_sound_get_listener_mask.soundid }
        ],
        signature: '(soundid)'
    },
	audio_sound_get_pitch: {
        description: '[Function]' + i18n.audio_sound_get_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_get_pitch.index }
        ],
        signature: '(index)'
    },
	audio_sound_get_track_position: {
        description: '[Function]' + i18n.audio_sound_get_track_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_sound_get_track_position.soundid }
        ],
        signature: '(soundid)'
    },
	audio_sound_length: {
        description: '[Function]' + i18n.audio_sound_length.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_sound_length.soundid }
        ],
        signature: '(soundid)'
    },
	audio_sound_pitch: {
        description: '[Function]' + i18n.audio_sound_pitch.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.audio_sound_pitch.index },
            { label: 'pitch', documentation: i18n.audio_sound_pitch.pitch }
        ],
        signature: '(index, pitch)'
    },
	audio_sound_set_listener_mask: {
        description: '[Function]' + i18n.audio_sound_set_listener_mask.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_sound_set_listener_mask.soundid },
            { label: 'mask', documentation: i18n.audio_sound_set_listener_mask.mask }
        ],
        signature: '(soundid, mask)'
    },
	audio_sound_set_track_position: {
        description: '[Function]' + i18n.audio_sound_set_track_position.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_sound_set_track_position.soundid },
            { label: 'time', documentation: i18n.audio_sound_set_track_position.time }
        ],
        signature: '(soundid, time)'
    },
	audio_start_recording: {
        description: '[Function]' + i18n.audio_start_recording.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'recorder_num', documentation: i18n.audio_start_recording.recorder_num }
        ],
        signature: '(recorder_num)'
    },
	audio_start_sync_group: {
        description: '[Function]' + i18n.audio_start_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_start_sync_group.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_stop_all: {
        description: '[Function]' + i18n.audio_stop_all.desc,
        available: datasimple.gms1
    },
	audio_stop_recording: {
        description: '[Function]' + i18n.audio_stop_recording.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'channel_index', documentation: i18n.audio_stop_recording.channel_index }
        ],
        signature: '(channel_index)'
    },
	audio_stop_sound: {
        description: '[Function]' + i18n.audio_stop_sound.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'soundid', documentation: i18n.audio_stop_sound.soundid }
        ],
        signature: '(soundid)'
    },
	audio_stop_sync_group: {
        description: '[Function]' + i18n.audio_stop_sync_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_stop_sync_group.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_sync_group_debug: {
        description: '[Function]' + i18n.audio_sync_group_debug.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_sync_group_debug.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_sync_group_get_track_pos: {
        description: '[Function]' + i18n.audio_sync_group_get_track_pos.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_sync_group_get_track_pos.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_sync_group_is_playing: {
        description: '[Function]' + i18n.audio_sync_group_is_playing.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sync_group_id', documentation: i18n.audio_sync_group_is_playing.sync_group_id }
        ],
        signature: '(sync_group_id)'
    },
	audio_system: {
        description: '[Function]' + i18n.audio_system.desc,
        available: datasimple.gms1
    },
	base64_decode: {
        description: '[Function]' + i18n.base64_decode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.base64_decode.string }
        ],
        signature: '(string)'
    },
	base64_encode: {
        description: '[Function]' + i18n.base64_encode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.base64_encode.string }
        ],
        signature: '(string)'
    },
	browser_input_capture: {
        description: '[Function]' + i18n.browser_input_capture.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.browser_input_capture.enable }
        ],
        signature: '(enable)'
    },
	buffer_async_group_begin: {
        description: '[Function]' + i18n.buffer_async_group_begin.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'groupname', documentation: i18n.buffer_async_group_begin.groupname }
        ],
        signature: '(groupname)'
    },
	buffer_async_group_end: {
        description: '[Function]' + i18n.buffer_async_group_end.desc,
        available: datasimple.gms1
    },
	buffer_async_group_option: {
        description: '[Function]' + i18n.buffer_async_group_option.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'optionname', documentation: i18n.buffer_async_group_option.optionname },
            { label: 'optionvalue', documentation: i18n.buffer_async_group_option.optionvalue }
        ],
        signature: '(optionname, optionvalue)'
    },
	buffer_base64_decode: {
        description: '[Function]' + i18n.buffer_base64_decode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.buffer_base64_decode.string }
        ],
        signature: '(string)'
    },
	buffer_base64_decode_ext: {
        description: '[Function]' + i18n.buffer_base64_decode_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_base64_decode_ext.buffer },
            { label: 'string', documentation: i18n.buffer_base64_decode_ext.string },
            { label: 'offset', documentation: i18n.buffer_base64_decode_ext.offset }
        ],
        signature: '(buffer, string, offset)'
    },
	buffer_base64_encode: {
        description: '[Function]' + i18n.buffer_base64_encode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_base64_encode.buffer },
            { label: 'offset', documentation: i18n.buffer_base64_encode.offset },
            { label: 'size', documentation: i18n.buffer_base64_encode.size }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_copy: {
        description: '[Function]' + i18n.buffer_copy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src_buffer', documentation: i18n.buffer_copy.src_buffer },
            { label: 'src_offset', documentation: i18n.buffer_copy.src_offset },
            { label: 'size', documentation: i18n.buffer_copy.size },
            { label: 'dest_buffer', documentation: i18n.buffer_copy.dest_buffer },
            { label: 'dest_offset', documentation: i18n.buffer_copy.dest_offset }
        ],
        signature: '(src_buffer, src_offset, size, dest_buffer, dest_offset)'
    },
	buffer_copy_from_vertex_buffer: {
        description: '[Function]' + i18n.buffer_copy_from_vertex_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vertex_buffer', documentation: i18n.buffer_copy_from_vertex_buffer.vertex_buffer },
            { label: 'start_vertex', documentation: i18n.buffer_copy_from_vertex_buffer.start_vertex },
            { label: 'num_vertices', documentation: i18n.buffer_copy_from_vertex_buffer.num_vertice },
            { label: 'dest_buffer', documentation: i18n.buffer_copy_from_vertex_buffer.dest_buffer },
            { label: 'dest_offset', documentation: i18n.buffer_copy_from_vertex_buffer.dest_offset }
        ],
        signature: '(vertex_buffer, start_vertex, num_vertices, dest_buffer, dest_offset)'
    },
	buffer_create: {
        description: '[Function]' + i18n.buffer_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'size', documentation: i18n.buffer_create.size },
            { label: 'buffer_type', documentation: i18n.buffer_create.buffer_type },
            { label: 'alignment', documentation: i18n.buffer_create.alignment }
        ],
        signature: '(size, buffer_type, alignment)'
    },
	buffer_create_from_vertex_buffer: {
        description: '[Function]' + i18n.buffer_create_from_vertex_buffer.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vertex_buffer', documentation: i18n.buffer_create_from_vertex_buffer.vertex_buffer },
            { label: 'type', documentation: i18n.buffer_create_from_vertex_buffer.type },
            { label: 'alignment', documentation: i18n.buffer_create_from_vertex_buffer.alignment }
        ],
        signature: '(vertex_buffer, type, alignment)'
    },
	buffer_create_from_vertex_buffer_ext: {
        description: '[Function]' + i18n.buffer_create_from_vertex_buffer_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vertex_buffer', documentation: i18n.buffer_create_from_vertex_buffer_ext.vertex_buffer },
            { label: 'type', documentation: i18n.buffer_create_from_vertex_buffer_ext.type },
            { label: 'alignment', documentation: i18n.buffer_create_from_vertex_buffer_ext.alignment },
            { label: 'start_vertex', documentation: i18n.buffer_create_from_vertex_buffer_ext.start_vertex },
            { label: 'num_vertices', documentation: i18n.buffer_create_from_vertex_buffer_ext.num_vertices }
        ],
        signature: '(vertex_buffer, type, alignment, start_vertex, num_vertices)'
    },
	buffer_delete: {
        description: '[Function]' + i18n.buffer_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_delete.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_exists: {
        description: '[Function]' + i18n.buffer_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_exists.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_fill: {
        description: '[Function]' + i18n.buffer_fill.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_fill.buffer },
            { label: 'offset', documentation: i18n.buffer_fill.offset },
            { label: 'type', documentation: i18n.buffer_fill.type },
            { label: 'value', documentation: i18n.buffer_fill.value },
            { label: 'size', documentation: i18n.buffer_fill.size }
        ],
        signature: '(buffer, offset, type, value, size)'
    },
	buffer_get_address: {
        description: '[Function]' + i18n.buffer_get_address.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_address.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_get_alignment: {
        description: '[Function]' + i18n.buffer_get_alignment.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_alignment.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_get_size: {
        description: '[Function]' + i18n.buffer_get_size.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_size.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_get_surface: {
        description: '[Function]' + i18n.buffer_get_surface.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_surface.buffer },
            { label: 'surface', documentation: i18n.buffer_get_surface.surface },
            { label: 'mode', documentation: i18n.buffer_get_surface.mode },
            { label: 'offset', documentation: i18n.buffer_get_surface.offset },
            { label: 'modulo', documentation: i18n.buffer_get_surface.modulo }
        ],
        signature: '(buffer, surface, mode, offset, modulo)'
    },
	buffer_get_type: {
        description: '[Function]' + i18n.buffer_get_type.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_get_type.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_load: {
        description: '[Function]' + i18n.buffer_load.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.buffer_load.filename }
        ],
        signature: '(filename)'
    },
	buffer_load_async: {
        description: '[Function]' + i18n.buffer_load_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_load_async.bufferid },
            { label: 'filename', documentation: i18n.buffer_load_async.filename },
            { label: 'offset', documentation: i18n.buffer_load_async.offset },
            { label: 'size', documentation: i18n.buffer_load_async.size }
        ],
        signature: '(bufferid, filename, offset, size)'
    },
	buffer_load_ext: {
        description: '[Function]' + i18n.buffer_load_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_load_ext.bufferid },
            { label: 'filename', documentation: i18n.buffer_load_ext.filename },
            { label: 'offset', documentation: i18n.buffer_load_ext.offset }
        ],
        signature: '(buffer, filename, offset)'
    },
	buffer_load_partial: {
        description: '[Function]' + i18n.buffer_load_partial.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_load_partial.bufferid },
            { label: 'filename', documentation: i18n.buffer_load_partial.filename },
            { label: 'src_offset', documentation: i18n.buffer_load_partial.src_offset },
            { label: 'src_len', documentation: i18n.buffer_load_partial.src_len },
            { label: 'dest_offset', documentation: i18n.buffer_load_partial.dest_offset }
        ],
        signature: '(buffer, filename, src_offset, src_len, dest_offset)'
    },
	buffer_md5: {
        description: '[Function]' + i18n.buffer_md5.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_md5.buffer },
            { label: 'offset', documentation: i18n.buffer_md5.offset },
            { label: 'size', documentation: i18n.buffer_md5.size }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_peek: {
        description: '[Function]' + i18n.buffer_peek.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_peek.buffer },
            { label: 'offset', documentation: i18n.buffer_peek.offset },
            { label: 'type', documentation: i18n.buffer_peek.type }
        ],
        signature: '(buffer, offset, type)'
    },
	buffer_poke: {
        description: '[Function]' + i18n.buffer_poke.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_poke.buffer },
            { label: 'offset', documentation: i18n.buffer_poke.offset },
            { label: 'type', documentation: i18n.buffer_poke.type },
            { label: 'value', documentation: i18n.buffer_poke.value }
        ],
        signature: '(buffer, offset, type, value)'
    },
	buffer_read: {
        description: '[Function]' + i18n.buffer_read.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_read.buffer },
            { label: 'type', documentation: i18n.buffer_read.type }
        ],
        signature: '(buffer, type)'
    },
	buffer_resize: {
        description: '[Function]' + i18n.buffer_resize.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_resize.buffer },
            { label: 'newsize', documentation: i18n.buffer_resize.newsize }
        ],
        signature: '(buffer, newsize)'
    },
	buffer_save: {
        description: '[Function]' + i18n.buffer_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_save.buffer },
            { label: 'filename', documentation: i18n.buffer_save.filename }
        ],
        signature: '(buffer, filename)'
    },
	buffer_save_async: {
        description: '[Function]' + i18n.buffer_save_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_save_async.buffer },
            { label: 'type', documentation: i18n.buffer_save_async.type },
            { label: 'offset', documentation: i18n.buffer_save_async.offset },
            { label: 'size', documentation: i18n.buffer_save_async.size }
        ],
        signature: '(bufferid, filename, offset, size)'
    },
	buffer_save_ext: {
        description: '[Function]' + i18n.buffer_save_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_save_ext.bufferid },
            { label: 'filename', documentation: i18n.buffer_save_ext.filename },
            { label: 'offset', documentation: i18n.buffer_save_ext.offset },
            { label: 'size', documentation: i18n.buffer_save_ext.size }
        ],
        signature: '(buffer, filename, offset, size)'
    },
	buffer_seek: {
        description: '[Function]' + i18n.buffer_seek.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_seek.bufferid },
            { label: 'base', documentation: i18n.buffer_seek.base },
            { label: 'offset', documentation: i18n.buffer_seek.offset }
        ],
        signature: '(buffer, base, offset)'
    },
	buffer_set_surface: {
        description: '[Function]' + i18n.buffer_set_surface.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_set_surface.buffer },
            { label: 'surface', documentation: i18n.buffer_set_surface.surface },
            { label: 'mode', documentation: i18n.buffer_set_surface.mode },
            { label: 'offset', documentation: i18n.buffer_set_surface.offset },
            { label: 'modulo', documentation: i18n.buffer_set_surface.modulo }
        ],
        signature: '(buffer, surface, mode, offset, modulo)'
    },
	buffer_sha1: {
        description: '[Function]' + i18n.buffer_sha1.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bufferid', documentation: i18n.buffer_sha1.bufferid },
            { label: 'offset', documentation: i18n.buffer_sha1.offset },
            { label: 'size', documentation: i18n.buffer_sha1.size }
        ],
        signature: '(buffer, offset, size)'
    },
	buffer_sizeof: {
        description: '[Function]' + i18n.buffer_sizeof.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.buffer_sizeof.type }
        ],
        signature: '(type)'
    },
	buffer_tell: {
        description: '[Function]' + i18n.buffer_tell.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_tell.buffer }
        ],
        signature: '(buffer)'
    },
	buffer_write: {
        description: '[Function]' + i18n.buffer_write.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.buffer_write.buffer },
            { label: 'type', documentation: i18n.buffer_write.type },
            { label: 'value', documentation: i18n.buffer_write.value }
        ],
        signature: '(buffer, type, value)'
    },
	ceil: {
        description: '[Function]' + i18n.ceil.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.ceil.x }
        ],
        signature: '(x)'
    },
	choose: {
        description: '[Function]' + i18n.choose.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.choose.x1 },
            { label: 'x2', documentation: i18n.choose.x2 },
            { label: 'x3', documentation: i18n.choose.x3 },
            { label: '...', documentation: i18n.choose.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	chr: {
        description: '[Function]' + i18n.chr.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.chr.val }
        ],
        signature: '(val)'
    },
	clamp: {
        description: '[Function]' + i18n.clamp.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.clamp.val },
            { label: 'min', documentation: i18n.clamp.min },
            { label: 'max', documentation: i18n.clamp.max }
        ],
        signature: '(val, min, max)'
    },
	clickable_add: {
        description: '[Function]' + i18n.clickable_add.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.clickable_add.x },
            { label: 'y', documentation: i18n.clickable_add.y },
            { label: 'spritetpe', documentation: i18n.clickable_add.spritetpe },
            { label: 'URL', documentation: i18nclickable_add.URL },
            { label: 'target', documentation: i18n.clickable_add.target },
            { label: 'params', documentation: i18n.clickable_add.params }
        ],
        signature: '(x, y, spritetpe, URL, target, params)'
    },
	clickable_add_ext: {
        description: '[Function]' + i18n.clickable_add_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.clickable_add_ext.x },
            { label: 'y', documentation: i18n.clickable_add_ext.y },
            { label: 'spritetpe', documentation: i18n.clickable_add_ext.spritetpe },
            { label: 'URL', documentation: i18n.clickable_add_ext.URL },
            { label: 'target', documentation: i18n.clickable_add_ext.target },
            { label: 'params', documentation: i18n.clickable_add_ext.params },
            { label: 'scale', documentation: i18n.clickable_add_ext.scale },
            { label: 'alpha', documentation: i18n.clickable_add_ext.alpha }
        ],
        signature: '(x, y, spritetpe, URL, target, params, scale, alpha)'
    },
	clickable_change: {
        description: '[Function]' + i18n.clickable_change.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buttonid', documentation: i18n.clickable_change.buttonid },
            { label: 'spritetpe', documentation: i18n.clickable_change.spritetpe },
            { label: 'x', documentation: i18n.clickable_change.x },
            { label: 'y', documentation: i18n.clickable_change.y }
        ],
        signature: '(buttonid, spritetpe, x, y)'
    },
	clickable_change_ext: {
        description: '[Function]' + i18n.clickable_change_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buttonid', documentation: i18n.clickable_change_ext.buttonid },
            { label: 'spritetpe', documentation: i18n.clickable_change_ext.spritetpe },
            { label: 'x', documentation: i18n.clickable_change_ext.x },
            { label: 'y', documentation: i18n.clickable_change_ext.y },
            { label: 'scale', documentation: i18n.clickable_change_ext.scale },
            { label: 'alpha', documentation: i18n.clickable_change_ext.alpha }
        ],
        signature: '(buttonid, spritetpe, x, y, scale, alpha)'
    },
	clickable_delete: {
        description: '[Function]' + i18n.clickable_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buttonid', documentation: i18n.clickable_delete.buttonid }
        ],
        signature: '(buttonid)'
    },
	clickable_exists: {
        description: '[Function]' + i18n.clickable_exists.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.clickable_exists.index }
        ],
        signature: '(index)'
    },
	clickable_set_style: {
        description: '[Function]' + i18n.clickable_set_style.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buttonid', documentation: i18n.clickable_set_style.buttonid },
            { label: 'map', documentation: i18n.clickable_set_style.map }
        ],
        signature: '(buttonid, map)'
    },
	clipboard_get_text: {
        description: '[Function]' + i18n.clipboard_get_text.desc,
        available: datasimple.all
    },
	clipboard_has_text: {
        description: '[Function]' + i18n.clipboard_has_text.desc,
        available: datasimple.all
    },
	clipboard_set_text: {
        description: '[Function]' + i18n.clipboard_set_text.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.clipboard_set_text.str }
        ],
        signature: '(str)'
    },
	cloud_file_save: {
        description: '[Function]' + i18n.cloud_file_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n.cloud_file_save.filename },
            { label: 'description', documentation: i18n.cloud_file_save.description }
        ],
        signature: '(filename, description)'
    },
	cloud_string_save: {
        description: '[Function]' + i18n.cloud_string_save.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'data', documentation: i18n.cloud_string_save.data },
            { label: 'description', documentation: i18n.cloud_string_save.description }
        ],
        signature: '(data, description)'
    },
	cloud_synchronise: {
        description: '[Function]' + i18n.cloud_synchronise.desc,
        available: datasimple.gms1
    },
	code_is_compiled: {
        description: '[Function]' + i18n.code_is_compiled.desc,
        available: datasimple.gms1
    },
	collision_circle: {
        description: '[Function]' + i18n.collision_circle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_circle.x1 },
            { label: 'y1', documentation: i18n.collision_circle.y1 },
            { label: 'radius', documentation: i18n.collision_circle.radius },
            { label: 'obj', documentation: i18n.collision_circle.obj },
            { label: 'prec', documentation: i18n.collision_circle.prec },
            { label: 'notme', documentation: i18n.collision_circle.notme }
        ],
        signature: '(x1, y1, radius, obj, prec, notme)'
    },
	collision_ellipse: {
        description: '[Function]' + i18n.collision_ellipse.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_ellipse.x1 },
            { label: 'y1', documentation: i18n.collision_ellipse.y1 },
            { label: 'x2', documentation: i18n.collision_ellipse.x2 },
            { label: 'y2', documentation: i18n.collision_ellipse.y2 },
            { label: 'obj', documentation: i18n.collision_ellipse.obj },
            { label: 'prec', documentation: i18n.collision_ellipse.prec },
            { label: 'notme', documentation: i18n.collision_ellipse.notme }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_line: {
        description: '[Function]' + i18n.collision_line.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_line.x1 },
            { label: 'y1', documentation: i18n.collision_line.y1 },
            { label: 'x2', documentation: i18n.collision_line.x2 },
            { label: 'y2', documentation: i18n.collision_line.y2 },
            { label: 'obj', documentation: i18n.collision_line.obj },
            { label: 'prec', documentation: i18n.collision_line.prec },
            { label: 'notme', documentation: i18n.collision_line.notme }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
	collision_point: {
        description: '[Function]' + i18n.collision_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.collision_point.x },
            { label: 'y', documentation: i18n.collision_point.y },
            { label: 'obj', documentation: i18n.collision_point.obj },
            { label: 'prec', documentation: i18n.collision_point.prec },
            { label: 'notme', documentation: i18n.collision_point.notme }
        ],
        signature: '(x, y, obj, prec, notme)'
    },
	collision_rectangle: {
        description: '[Function]' + i18n.collision_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.collision_rectangle.x1 },
            { label: 'y1', documentation: i18n.collision_rectangle.y1 },
            { label: 'x2', documentation: i18n.collision_rectangle.x2 },
            { label: 'y2', documentation: i18n.collision_rectangle.y2 },
            { label: 'obj', documentation: i18n.collision_rectangle.obj },
            { label: 'prec', documentation: i18n.collision_rectangle.prec },
            { label: 'notme', documentation: i18n.collision_rectangle.notme }
        ],
        signature: '(x1, y1, x2, y2, obj, prec, notme)'
    },
    color_get_blue: {
        description: '[Function]' + i18n.color_get_blue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_blue.col }
        ],
        signature: '(col)'
    },
	color_get_green: {
        description: '[Function]' + i18n.color_get_green.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_green.col }
        ],
        signature: '(col)'
    },
	color_get_hue: {
        description: '[Function]' + i18n.color_get_hue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_hue.col }
        ],
        signature: '(col)'
    },
	color_get_red: {
        description: '[Function]' + i18n.color_get_red.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_red.col }
        ],
        signature: '(col)'
    },
	color_get_saturation: {
        description: '[Function]' + i18n.color_get_saturation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_saturation.col }
        ],
        signature: '(col)'
    },
	color_get_value: {
        description: '[Function]' + i18n.color_get_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.color_get_value.col }
        ],
        signature: '(col)'
    },
	colour_get_blue: {
        description: '[Function]' + i18n.colour_get_blue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_blue.col }
        ],
        signature: '(col)'
    },
	colour_get_green: {
        description: '[Function]' + i18n.colour_get_green.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_green.col }
        ],
        signature: '(col)'
    },
	colour_get_hue: {
        description: '[Function]' + i18n.colour_get_hue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_hue.col }
        ],
        signature: '(col)'
    },
	colour_get_red: {
        description: '[Function]' + i18n.colour_get_red.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_red.col }
        ],
        signature: '(col)'
    },
	colour_get_saturation: {
        description: '[Function]' + i18n.colour_get_saturation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_saturation.col }
        ],
        signature: '(col)'
    },
	colour_get_value: {
        description: '[Function]' + i18n.colour_get_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.colour_get_value.col }
        ],
        signature: '(col)'
    },
	cos: {
        description: '[Function]' + i18n.cos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'radian_angle', documentation: i18n.cos.radian_angle }
        ],
        signature: '(radian_angle)'
    },
	darccos: {
        description: '[Function]' + i18n.darccos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.darccos.x }
        ],
        signature: '(x)'
    },
	darcsin: {
        description: '[Function]' + i18n.darcsin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.darcsin.x }
        ],
        signature: '(x)'
    },
	darctan: {
        description: '[Function]' + i18n.darctan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.darctan.x }
        ],
        signature: '(x)'
    },
	darctan2: {
        description: '[Function]' + i18n.darctan2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'y', documentation: i18n.darctan2.y },
            { label: 'x', documentation: i18n.darctan2.x }
        ],
        signature: '(y, x)'
    },
	date_compare_date: {
        description: '[Function]' + i18n.date_compare_date.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_compare_date.date1 },
            { label: 'date2', documentation: i18n.date_compare_date.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_compare_datetime: {
        description: '[Function]' + i18n.date_compare_datetime.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_compare_datetime.date1 },
            { label: 'date2', documentation: i18n.date_compare_datetime.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_compare_time: {
        description: '[Function]' + i18n.date_compare_time.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_compare_time.date1 },
            { label: 'date2', documentation: i18n.date_compare_time.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_create_datetime: {
        description: '[Function]' + i18n.date_create_datetime.desc,
        available: datasimple.all,
        parameters: [
            { label: 'year', documentation: i18n.date_create_datetime.year },
            { label: 'month', documentation: i18n.date_create_datetime.month },
            { label: 'day', documentation: i18n.date_create_datetime.day },
            { label: 'hour', documentation: i18n.date_create_datetime.hour },
            { label: 'minute', documentation: i18n.date_create_datetime.minute },
            { label: 'second', documentation: i18n.date_create_datetime.second }
        ],
        signature: '(year, month, day, hour, minute, second)'
    },
	date_current_datetime: {
        description: '[Function]' + i18n.date_current_datetime.desc,
        available: datasimple.all
    },
	date_datetime_string: {
        description: '[Function]' + i18n.date_datetime_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_datetime_string.date }
        ],
        signature: '(date)'
    },
	date_date_of: {
        description: '[Function]' + i18n.date_date_of.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_date_of.date }
        ],
        signature: '(date)'
    },
	date_date_string: {
        description: '[Function]' + i18n.date_date_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_date_string.date }
        ],
        signature: '(date)'
    },
	date_days_in_month: {
        description: '[Function]' + i18n.date_days_in_month.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_days_in_month.date }
        ],
        signature: '(date)'
    },
	date_days_in_year: {
        description: '[Function]' + i18n.date_days_in_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_days_in_year.date }
        ],
        signature: '(date)'
    },
	date_day_span: {
        description: '[Function]' + i18n.date_day_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_day_span.date1 },
            { label: 'date2', documentation: i18n.date_day_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_get_day: {
        description: '[Function]' + i18n.date_get_day.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_day.date }
        ],
        signature: '(date)'
    },
	date_get_day_of_year: {
        description: '[Function]' + i18n.date_get_day_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_day_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_hour: {
        description: '[Function]' + i18n.date_get_hour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_hour.date }
        ],
        signature: '(date)'
    },
	date_get_hour_of_year: {
        description: '[Function]' + i18n.date_get_hour_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_hour_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_minute: {
        description: '[Function]' + i18n.date_get_minute.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_minute.date }
        ],
        signature: '(date)'
    },
	date_get_minute_of_year: {
        description: '[Function]' + i18n.date_get_minute_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_minute_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_month: {
        description: '[Function]' + i18n.date_get_month.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_month.date }
        ],
        signature: '(date)'
    },
	date_get_second: {
        description: '[Function]' + i18n.date_get_second.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_second.date }
        ],
        signature: '(date)'
    },
	date_get_second_of_year: {
        description: '[Function]' + i18n.date_get_second_of_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_second_of_year.date }
        ],
        signature: '(date)'
    },
	date_get_timezone: {
        description: '[Function]' + i18n.date_get_timezone.desc,
        available: datasimple.all
    },
	date_get_week: {
        description: '[Function]' + i18n.date_get_week.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_week.date }
        ],
        signature: '(date)'
    },
	date_get_weekday: {
        description: '[Function]' + i18n.date_get_weekday.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_weekday.date }
        ],
        signature: '(date)'
    },
	date_get_year: {
        description: '[Function]' + i18n.date_get_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_get_year.date }
        ],
        signature: '(date)'
    },
	date_hour_span: {
        description: '[Function]' + i18n.date_hour_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_hour_span.date1 },
            { label: 'date2', documentation: i18n.date_hour_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_inc_day: {
        description: '[Function]' + i18n.date_inc_day.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_day.date },
            { label: 'amount', documentation: i18n.date_inc_day.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_hour: {
        description: '[Function]' + i18n.date_inc_hour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_hour.date },
            { label: 'amount', documentation: i18n.date_inc_hour.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_minute: {
        description: '[Function]' + i18n.date_inc_minute.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_minute.date },
            { label: 'amount', documentation: i18n.date_inc_minute.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_month: {
        description: '[Function]' + i18n.date_inc_month.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_month.date },
            { label: 'amount', documentation: i18n.date_inc_month.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_second: {
        description: '[Function]' + i18n.date_inc_second.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_second.date },
            { label: 'amount', documentation: i18n.date_inc_second.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_week: {
        description: '[Function]' + i18n.date_inc_week.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_week.date },
            { label: 'amount', documentation: i18n.date_inc_week.amount }
        ],
        signature: '(date, amount)'
    },
	date_inc_year: {
        description: '[Function]' + i18n.date_inc_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_inc_year.date },
            { label: 'amount', documentation: i18n.date_inc_year.amount }
        ],
        signature: '(date, amount)'
    },
	date_is_today: {
        description: '[Function]' + i18n.date_is_today.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_is_today.date }
        ],
        signature: '(date)'
    },
	date_leap_year: {
        description: '[Function]' + i18n.date_leap_year.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_leap_year.date }
        ],
        signature: '(date)'
    },
	date_minute_span: {
        description: '[Function]' + i18n.date_minute_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_minute_span.date1 },
            { label: 'date2', documentation: i18n.date_minute_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_month_span: {
        description: '[Function]' + i18n.date_month_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_month_span.date1 },
            { label: 'date2', documentation: i18n.date_month_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_second_span: {
        description: '[Function]' + i18n.date_second_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_second_span.date1 },
            { label: 'date2', documentation: i18n.date_second_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_set_timezone: {
        description: '[Function]' + i18n.date_set_timezone.desc,
        available: datasimple.all,
        parameters: [
            { label: 'timezone', documentation: i18n.date_set_timezone.timezone }
        ],
        signature: '(timezone)'
    },
	date_time_of: {
        description: '[Function]' + i18n.date_time_of.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_time_of.date }
        ],
        signature: '(date)'
    },
	date_time_string: {
        description: '[Function]' + i18n.date_time_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date', documentation: i18n.date_time_string.date }
        ],
        signature: '(date)'
    },
	date_valid_datetime: {
        description: '[Function]' + i18n.date_valid_datetime.desc,
        available: datasimple.all,
        parameters: [
            { label: 'year', documentation: i18n.date_valid_datetime.year },
            { label: 'month', documentation: i18n.date_valid_datetime.month },
            { label: 'day', documentation: i18n.date_valid_datetime.day },
            { label: 'hour', documentation: i18n.date_valid_datetime.hour },
            { label: 'minute', documentation: i18n.date_valid_datetime.minute },
            { label: 'second', documentation: i18n.date_valid_datetime.second }
        ],
        signature: '(year, month, day, hour, minute, second)'
    },
	date_week_span: {
        description: '[Function]' + i18n.date_week_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_week_span.date1 },
            { label: 'date2', documentation: i18n.date_week_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	date_year_span: {
        description: '[Function]' + i18n.date_year_span.desc,
        available: datasimple.all,
        parameters: [
            { label: 'date1', documentation: i18n.date_year_span.date1 },
            { label: 'date2', documentation: i18n.date_year_span.date2 }
        ],
        signature: '(date1, date2)'
    },
	dcos: {
        description: '[Function]' + i18n.dcos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'degree_angle', documentation: i18n.dcos.degree_angle }
        ],
        signature: '(degree_angle)'
    },
	debug_event: {
        description: '[Function]' + i18n.debug_event.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.debug_event.str }
        ],
        signature: '(str)'
    },
	degtorad: {
        description: '[Function]' + i18n.degtorad.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.degtorad.x }
        ],
        signature: '(x)'
    },
	device_get_tilt_x: {
        description: '[Function]' + i18n.device_get_tilt_x.desc,
        available: datasimple.gms1
    },
	device_get_tilt_y: {
        description: '[Function]' + i18n.device_get_tilt_y.desc,
        available: datasimple.gms1
    },
	device_get_tilt_z: {
        description: '[Function]' + i18n.device_get_tilt_z.desc,
        available: datasimple.gms1
    },
	device_is_keypad_open: {
        description: '[Function]' + i18n.device_is_keypad_open.desc,
        available: datasimple.gms1
    },
	device_mouse_check_button: {
        description: '[Function]' + i18n.device_mouse_check_button.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_check_button.device },
            { label: 'button', documentation: i18n.device_mouse_check_button.button }
        ],
        signature: '(device, button)'
    },
	device_mouse_check_button_pressed: {
        description: '[Function]' + i18n.device_mouse_check_button_pressed.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_check_button_pressed.device },
            { label: 'button', documentation: i18n.device_mouse_check_button_pressed.button }
        ],
        signature: '(device, button)'
    },
	device_mouse_check_button_released: {
        description: '[Function]' + i18n.device_mouse_check_button_released.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_check_button_released.device },
            { label: 'button', documentation: i18n.device_mouse_check_button_released.button }
        ],
        signature: '(device, button)'
    },
	device_mouse_dbclick_enable: {
        description: '[Function]' + i18n.device_mouse_dbclick_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.device_mouse_dbclick_enable.enable }
        ],
        signature: '(enable)'
    },
	device_mouse_raw_x: {
        description: '[Function]' + i18n.device_mouse_raw_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_raw_x.device }
        ],
        signature: '(device)'
    },
	device_mouse_raw_y: {
        description: '[Function]' + i18n.device_mouse_raw_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_raw_y.device }
        ],
        signature: '(device)'
    },
	device_mouse_x: {
        description: '[Function]' + i18n.device_mouse_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_x.device }
        ],
        signature: '(device)'
    },
	device_mouse_x_to_gui: {
        description: '[Function]' + i18n.device_mouse_x_to_gui.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_x_to_gui.device }
        ],
        signature: '(device)'
    },
	device_mouse_y: {
        description: '[Function]' + i18n.device_mouse_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_y.device }
        ],
        signature: '(device)'
    },
	device_mouse_y_to_gui: {
        description: '[Function]' + i18n.device_mouse_y_to_gui.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'device', documentation: i18n.device_mouse_y_to_gui.device }
        ],
        signature: '(device)'
    },
	directory_create: {
        description: '[Function]' + i18n.directory_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dname', documentation: i18n.directory_create.dname }
        ],
        signature: '(dname)'
    },
	directory_destroy: {
        description: '[Function]' + i18n.directory_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dname', documentation: i18n.directory_destroy.dname }
        ],
        signature: '(dname)'
    },
	directory_exists: {
        description: '[Function]' + i18n.directory_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dname', documentation: i18n.directory_exists.dname }
        ],
        signature: '(dname)'
    },
	display_get_dpi_x: {
        description: '[Function]' + i18n.display_get_dpi_x.desc,
        available: datasimple.gms1
    },
	display_get_dpi_y: {
        description: '[Function]' + i18n.display_get_dpi_y.desc,
        available: datasimple.gms1
    },
	display_get_gui_height: {
        description: '[Function]' + i18n.display_get_gui_height.desc,
        available: datasimple.gms1
    },
	display_get_gui_width: {
        description: '[Function]' + i18n.display_get_gui_width.desc,
        available: datasimple.gms1
    },
	
    display_get_colordepth: {
        description: '[Function]' + i18n.display_get_colordepth.desc,
        available: datasimple.gms1
    },
	display_get_height: {
        description: '[Function]' + i18n.display_get_height.desc,
        available: datasimple.gms1
    },
	display_get_orientation: {
        description: '[Function]' + i18n.display_get_orientation.desc,
        available: datasimple.gms1
    },
	display_get_width: {
        description: '[Function]' + i18n.display_get_width.desc,
        available: datasimple.gms1
    },
	display_mouse_get_x: {
        description: '[Function]' + i18n.display_mouse_get_x.desc,
        available: datasimple.gms1
    },
	display_mouse_get_y: {
        description: '[Function]' + i18n.display_mouse_get_y.desc,
        available: datasimple.gms1
    },
	display_set_gui_maximise: {
        description: '[Function]' + i18n.display_set_gui_maximise.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xscale', documentation: i18n.display_set_gui_maximise.xscale },
            { label: 'yscale', documentation: i18n.display_set_gui_maximise.yscale },
            { label: 'xoffset', documentation: i18n.display_set_gui_maximise.xoffset },
            { label: 'yoffset', documentation: i18n.display_set_gui_maximise.yoffset }
        ],
        signature: '(xscale, yscale, xoffset, yoffset)'
    },
	display_set_gui_size: {
        description: '[Function]' + i18n.display_set_gui_size.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'width', documentation: i18n.display_set_gui_size.width },
            { label: 'height', documentation: i18n.display_set_gui_size.height }
        ],
        signature: '(width, height)'
    },
	display_set_ui_visibility: {
        description: '[Function]' + i18n.display_set_ui_visibility.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'flags', documentation: i18n.display_set_ui_visibility.flags }
        ],
        signature: '(flags)'
    },
	display_mouse_set: {
        description: '[Function]' + i18n.display_mouse_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.display_mouse_set.x },
            { label: 'y', documentation: i18n.display_mouse_set.y }
        ],
        signature: '(x, y)'
    },
	display_reset: {
        description: '[Function]' + i18n.display_reset.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'aa_level', documentation: i18n.display_reset.aa_level },
            { label: 'vsync', documentation: i18n.display_reset.vsync }
        ],
        signature: '(aa_level, vsync)'
    },
	distance_to_object: {
        description: '[Function]' + i18n.distance_to_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.distance_to_object.obj }
        ],
        signature: '(obj)'
    },
	distance_to_point: {
        description: '[Function]' + i18n.distance_to_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.distance_to_point.x },
            { label: 'y', documentation: i18n.distance_to_point.y }
        ],
        signature: '(x, y)'
    },
	dot_product: {
        description: '[Function]' + i18n.dot_product.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product.x1 },
            { label: 'y1', documentation: i18n.dot_product.y1 },
            { label: 'x2', documentation: i18n.dot_product.x2 },
            { label: 'y2', documentation: i18n.dot_product.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	dot_product_3d: {
        description: '[Function]' + i18n.dot_product_3d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product_3d.x1 },
            { label: 'y1', documentation: i18n.dot_product_3d.y1 },
            { label: 'z1', documentation: i18n.dot_product_3d.z1 },
            { label: 'x2', documentation: i18n.dot_product_3d.x2 },
            { label: 'y2', documentation: i18n.dot_product_3d.y2 },
            { label: 'z2', documentation: i18n.dot_product_3d.z2 }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	dot_product_3d_normalised: {
        description: '[Function]' + i18n.dot_product_3d_normalised.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product_3d_normalised.x1 },
            { label: 'y1', documentation: i18n.dot_product_3d_normalised.y1 },
            { label: 'z1', documentation: i18n.dot_product_3d_normalised.z1 },
            { label: 'x2', documentation: i18n.dot_product_3d_normalised.x2 },
            { label: 'y2', documentation: i18n.dot_product_3d_normalised.y2 },
            { label: 'z2', documentation: i18n.dot_product_3d_normalised.z2 }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	dot_product_normalised: {
        description: '[Function]' + i18n.dot_product_normalised.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.dot_product_normalised.x1 },
            { label: 'y1', documentation: i18n.dot_product_normalised.y1 },
            { label: 'x2', documentation: i18n.dot_product_normalised.x2 },
            { label: 'y2', documentation: i18n.dot_product_normalised.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_arrow: {
        description: '[Function]' + i18n.draw_arrow.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_arrow.x1 },
            { label: 'y1', documentation: i18n.draw_arrow.y1 },
            { label: 'x2', documentation: i18n.draw_arrow.x2 },
            { label: 'y2', documentation: i18n.draw_arrow.y2 },
            { label: 'size', documentation: i18n.draw_arrow.size }
        ],
        signature: '(x1, y1, x2, y2, size)'
    },
	draw_button: {
        description: '[Function]' + i18n.draw_button.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_button.x1 },
            { label: 'y1', documentation: i18n.draw_button.y1 },
            { label: 'x2', documentation: i18n.draw_button.x2 },
            { label: 'y2', documentation: i18n.draw_button.y2 },
            { label: 'up', documentation: i18n.draw_button.up }
        ],
        signature: '(x1, y1, x2, y2, up)'
    },
	draw_circle: {
        description: '[Function]' + i18n.draw_circle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_circle.x },
            { label: 'y', documentation: i18n.draw_circle.y },
            { label: 'r', documentation: i18n.draw_circle.r },
            { label: 'outline', documentation: i18n.draw_circle.outline }
        ],
        signature: '(x, y, r, outline)'
    },
	draw_circle_color: {
        description: '[Function]' + i18n.draw_circle_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_circle_color.x },
            { label: 'y', documentation: i18n.draw_circle_color.y },
            { label: 'r', documentation: i18n.draw_circle_color.r },
            { label: 'col1', documentation: i18n.draw_circle_color.col1 },
            { label: 'col2', documentation: i18n.draw_circle_color.col2 },
            { label: 'outline', documentation: i18n.draw_circle_color.outline }
        ],
        signature: '(x, y, r, col1, col2, outline)'
    },
	draw_circle_colour: {
        description: '[Function]' + i18n.draw_circle_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_circle_colour.x },
            { label: 'y', documentation: i18n.draw_circle_colour.y },
            { label: 'r', documentation: i18n.draw_circle_colour.r },
            { label: 'col1', documentation: i18n.draw_circle_colour.col1 },
            { label: 'col2', documentation: i18n.draw_circle_colour.col2 },
            { label: 'outline', documentation: i18n.draw_circle_colour.outline }
        ],
        signature: '(x, y, r, col1, col2, outline)'
    },
	draw_clear: {
        description: '[Function]' + i18n.draw_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_clear.col }
        ],
        signature: '(col)'
    },
	draw_clear_alpha: {
        description: '[Function]' + i18n.draw_clear_alpha.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_clear_alpha.col },
            { label: 'alpha', documentation: i18n.draw_clear_alpha.alpha }
        ],
        signature: '(col, alpha)'
    },
	draw_ellipse: {
        description: '[Function]' + i18n.draw_ellipse.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_ellipse.x1 },
            { label: 'y1', documentation: i18n.draw_ellipse.y1 },
            { label: 'x2', documentation: i18n.draw_ellipse.x2 },
            { label: 'y2', documentation: i18n.draw_ellipse.y2 },
            { label: 'outline', documentation: i18n.draw_ellipse.outline }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_ellipse_color: {
        description: '[Function]' + i18n.draw_ellipse_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_ellipse_color.x1 },
            { label: 'y1', documentation: i18n.draw_ellipse_color.y1 },
            { label: 'x2', documentation: i18n.draw_ellipse_color.x2 },
            { label: 'y2', documentation: i18n.draw_ellipse_color.y2 },
            { label: 'col1', documentation: i18n.draw_ellipse_color.col1 },
            { label: 'col2', documentation: i18n.draw_ellipse_color.col2 },
            { label: 'outline', documentation: i18n.draw_ellipse_color.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_ellipse_colour: {
        description: '[Function]' + i18n.draw_ellipse_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_ellipse_colour.x1 },
            { label: 'y1', documentation: i18n.draw_ellipse_colour.y1 },
            { label: 'x2', documentation: i18n.draw_ellipse_colour.x2 },
            { label: 'y2', documentation: i18n.draw_ellipse_colour.y2 },
            { label: 'col1', documentation: i18n.draw_ellipse_colour.col1 },
            { label: 'col2', documentation: i18n.draw_ellipse_colour.col2 },
            { label: 'outline', documentation: i18n.draw_ellipse_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_enable_alphablend: {
        description: '[Function]' + i18n.draw_enable_alphablend.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.draw_enable_alphablend.enable }
        ],
        signature: '(enable)'
    },
	draw_enable_drawevent: {
        description: '[Function]' + i18n.draw_enable_drawevent.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.draw_enable_drawevent.enable }
        ],
        signature: '(enable)'
    },
	draw_enable_swf_aa: {
        description: '[Function]' + i18n.draw_enable_swf_aa.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.draw_enable_swf_aa.enable }
        ],
        signature: '(enable)'
    },
	draw_flush: {
        description: '[Function]' + i18n.draw_flush.desc,
        available: datasimple.all
    },
	draw_getpixel: {
        description: '[Function]' + i18n.draw_getpixel.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_getpixel.x },
            { label: 'y', documentation: i18n.draw_getpixel.y }
        ],
        signature: '(x, y)'
    },
	draw_getpixel_ext: {
        description: '[Function]' + i18n.draw_getpixel_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_getpixel_ext.x },
            { label: 'y', documentation: i18n.draw_getpixel_ext.y }
        ],
        signature: '(x, y)'
    },
	draw_get_alpha: {
        description: '[Function]' + i18n.draw_get_alpha.desc,
        available: datasimple.all
    },
	draw_get_alpha_test: {
        description: '[Function]' + i18n.draw_get_alpha_test.desc,
        available: datasimple.all
    },
	draw_get_alpha_test_ref_value: {
        description: '[Function]' + i18n.draw_get_alpha_test_ref_value.desc,
        available: datasimple.all
    },
	draw_get_color: {
        description: '[Function]' + i18n.draw_get_color.desc,
        available: datasimple.all
    },
	draw_get_colour: {
        description: '[Function]' + i18n.draw_get_colour.desc,
        available: datasimple.all
    },
	draw_get_swf_aa_level: {
        description: '[Function]' + i18n.draw_get_swf_aa_level.desc,
        available: datasimple.all
    },
	draw_healthbar: {
        description: '[Function]' + i18n.draw_healthbar.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_healthbar.x1 },
            { label: 'y1', documentation: i18n.draw_healthbar.y1 },
            { label: 'x2', documentation: i18n.draw_healthbar.x2 },
            { label: 'y2', documentation: i18n.draw_healthbar.y2 },
            { label: 'amount', documentation: i18n.draw_healthbar.amount },
            { label: 'backcol', documentation: i18n.draw_healthbar.backcol },
            { label: 'mincol', documentation: i18n.draw_healthbar.mincol },
            { label: 'maxcol', documentation: i18n.draw_healthbar.maxcol },
            { label: 'direction', documentation: i18n.draw_healthbar.direction },
            { label: 'showback', documentation: i18n.draw_healthbar.showback },
            { label: 'showborder', documentation: i18n.draw_healthbar.showborder }
        ],
        signature: '(x1, y1, x2, y2, amount, backcol, mincol, maxcol, direction, showback, showborder)'
    },
	draw_highscore: {
        description: '[Function]' + i18n.draw_highscore.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_highscore.x1 },
            { label: 'y1', documentation: i18n.draw_highscore.y1 },
            { label: 'x2', documentation: i18n.draw_highscore.x2 },
            { label: 'y2', documentation: i18n.draw_highscore.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_line: {
        description: '[Function]' + i18n.draw_line.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line.x1 },
            { label: 'y1', documentation: i18n.draw_line.y1 },
            { label: 'x2', documentation: i18n.draw_line.x2 },
            { label: 'y2', documentation: i18n.draw_line.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	draw_line_color: {
        description: '[Function]' + i18n.draw_line_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_color.x1 },
            { label: 'y1', documentation: i18n.draw_line_color.y1 },
            { label: 'x2', documentation: i18n.draw_line_color.x2 },
            { label: 'y2', documentation: i18n.draw_line_color.y2 },
            { label: 'col1', documentation: i18n.draw_line_color.col1 },
            { label: 'col2', documentation: i18n.draw_line_color.col2 }
        ],
        signature: '(x1, y1, x2, y2, col1, col2)'
    },
	draw_line_colour: {
        description: '[Function]' + i18n.draw_line_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_colour.x1 },
            { label: 'y1', documentation: i18n.draw_line_colour.y1 },
            { label: 'x2', documentation: i18n.draw_line_colour.x2 },
            { label: 'y2', documentation: i18n.draw_line_colour.y2 },
            { label: 'col1', documentation: i18n.draw_line_colour.col1 },
            { label: 'col2', documentation: i18n.draw_line_colour.col2 }
        ],
        signature: '(x1, y1, x2, y2, col1, col2)'
    },
	draw_line_width: {
        description: '[Function]' + i18n.draw_line_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_width.x1 },
            { label: 'y1', documentation: i18n.draw_line_width.y1 },
            { label: 'x2', documentation: i18n.draw_line_width.x2 },
            { label: 'y2', documentation: i18n.draw_line_width.y2 },
            { label: 'w', documentation: i18n.draw_line_width.w }
        ],
        signature: '(x1, y1, x2, y2, w)'
    },
	draw_line_width_color: {
        description: '[Function]' + i18n.draw_line_width_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_width_color.x1 },
            { label: 'y1', documentation: i18n.draw_line_width_color.y1 },
            { label: 'x2', documentation: i18n.draw_line_width_color.x2 },
            { label: 'y2', documentation: i18n.draw_line_width_color.y2 },
            { label: 'w', documentation: i18n.draw_line_width_color.w },
            { label: 'col1', documentation: i18n.draw_line_width_color.col1 },
            { label: 'col2', documentation: i18n.draw_line_width_color.col2 }
        ],
        signature: '(x1, y1, x2, y2, w, col1, col2)'
    },
	draw_line_width_colour: {
        description: '[Function]' + i18n.draw_line_width_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_line_width_colour.x1 },
            { label: 'y1', documentation: i18n.draw_line_width_colour.y1 },
            { label: 'x2', documentation: i18n.draw_line_width_colour.x2 },
            { label: 'y2', documentation: i18n.draw_line_width_colour.y2 },
            { label: 'w', documentation: i18n.draw_line_width_colour.w },
            { label: 'col1', documentation: i18n.draw_line_width_colour.col1 },
            { label: 'col2', documentation: i18n.draw_line_width_colour.col2 }
        ],
        signature: '(x1, y1, x2, y2, w, col1, col2)'
    },
	draw_path: {
        description: '[Function]' + i18n.draw_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.draw_path.path },
            { label: 'x1', documentation: i18n.draw_path.x1 },
            { label: 'y1', documentation: i18n.draw_path.y1 },
            { label: 'absolute', documentation: i18n.draw_path.absolute }
        ],
        signature: '(path, x, y, absolute)'
    },
	draw_point: {
        description: '[Function]' + i18n.draw_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_point.x },
            { label: 'y', documentation: i18n.draw_point.y }
        ],
        signature: '(x, y)'
    },
	draw_point_color: {
        description: '[Function]' + i18n.draw_point_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_point_color.x },
            { label: 'y', documentation: i18n.draw_point_color.y },
            { label: 'col', documentation: i18n.draw_point_color.col }
        ],
        signature: '(x, y, col1)'
    },
	draw_point_colour: {
        description: '[Function]' + i18n.draw_point_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_point_colour.x },
            { label: 'y', documentation: i18n.draw_point_colour.y },
            { label: 'col', documentation: i18n.draw_point_colour.col }
        ],
        signature: '(x, y, col1)'
    },
	draw_primitive_begin: {
        description: '[Function]' + i18n.draw_primitive_begin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.draw_primitive_begin.kind }
        ],
        signature: '(kind)'
    },
	draw_primitive_begin_texture: {
        description: '[Function]' + i18n.draw_primitive_begin_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.draw_primitive_begin_texture.kind },
            { label: 'texid', documentation: i18n.draw_primitive_begin_texture.texid }
        ],
        signature: '(kind, texid)'
    },
	draw_primitive_end: {
        description: '[Function]' + i18n.draw_primitive_end.desc,
        available: datasimple.all
    },
	draw_rectangle: {
        description: '[Function]' + i18n.draw_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_rectangle.x1 },
            { label: 'y1', documentation: i18n.draw_rectangle.y1 },
            { label: 'x2', documentation: i18n.draw_rectangle.x2 },
            { label: 'y2', documentation: i18n.draw_rectangle.y2 },
            { label: 'outline', documentation: i18n.draw_rectangle.outline }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_rectangle_color: {
        description: '[Function]' + i18n.draw_rectangle_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_rectangle_color.x1 },
            { label: 'y1', documentation: i18n.draw_rectangle_color.y1 },
            { label: 'x2', documentation: i18n.draw_rectangle_color.x2 },
            { label: 'y2', documentation: i18n.draw_rectangle_color.y2 },
            { label: 'col1', documentation: i18n.draw_rectangle_color.col1 },
            { label: 'col2', documentation: i18n.draw_rectangle_color.col2 },
            { label: 'col3', documentation: i18n.draw_rectangle_color.col3 },
            { label: 'col4', documentation: i18n.draw_rectangle_color.col4 },
            { label: 'outline', documentation: i18n.draw_rectangle_color.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, col3, col4, outline)'
    },
	draw_rectangle_colour: {
        description: '[Function]' + i18n.draw_rectangle_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_rectangle_colour.x1 },
            { label: 'y1', documentation: i18n.draw_rectangle_colour.y1 },
            { label: 'x2', documentation: i18n.draw_rectangle_colour.x2 },
            { label: 'y2', documentation: i18n.draw_rectangle_colour.y2 },
            { label: 'col1', documentation: i18n.draw_rectangle_colour.col1 },
            { label: 'col2', documentation: i18n.draw_rectangle_colour.col2 },
            { label: 'col3', documentation: i18n.draw_rectangle_colour.col3 },
            { label: 'col4', documentation: i18n.draw_rectangle_colour.col4 },
            { label: 'outline', documentation: i18n.draw_rectangle_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, col3, col4, outline)'
    },
	draw_roundrect: {
        description: '[Function]' + i18n.draw_roundrect.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect.y2 },
            { label: 'outline', documentation: i18n.draw_roundrect.outline }
        ],
        signature: '(x1, y1, x2, y2, outline)'
    },
	draw_roundrect_color: {
        description: '[Function]' + i18n.draw_roundrect_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_color.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_color.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_color.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_color.y2 },
            { label: 'col1', documentation: i18n.draw_roundrect_color.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_color.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_color.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_roundrect_color_ext: {
        description: '[Function]' + i18n.draw_roundrect_color_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_color_ext.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_color_ext.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_color_ext.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_color_ext.y2 },
            { label: 'radiusx', documentation: i18n.draw_roundrect_color_ext.radiusx },
            { label: 'radiusy', documentation: i18n.draw_roundrect_color_ext.radiusy },
            { label: 'col1', documentation: i18n.draw_roundrect_color_ext.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_color_ext.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_color_ext.outline }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, col1, col2, outline)'
    },
	draw_roundrect_colour: {
        description: '[Function]' + i18n.draw_roundrect_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_colour.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_colour.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_colour.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_colour.y2 },
            { label: 'col1', documentation: i18n.draw_roundrect_colour.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_colour.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, col1, col2, outline)'
    },
	draw_roundrect_colour_ext: {
        description: '[Function]' + i18n.draw_roundrect_colour_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_colour_ext.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_colour_ext.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_colour_ext.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_colour_ext.y2 },
            { label: 'radiusx', documentation: i18n.draw_roundrect_colour_ext.radiusx },
            { label: 'radiusy', documentation: i18n.draw_roundrect_colour_ext.radiusy },
            { label: 'col1', documentation: i18n.draw_roundrect_colour_ext.col1 },
            { label: 'col2', documentation: i18n.draw_roundrect_colour_ext.col2 },
            { label: 'outline', documentation: i18n.draw_roundrect_colour_ext.outline }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, col1, col2, outline)'
    },
	draw_roundrect_ext: {
        description: '[Function]' + i18n.draw_roundrect_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.draw_roundrect_ext.x1 },
            { label: 'y1', documentation: i18n.draw_roundrect_ext.y1 },
            { label: 'x2', documentation: i18n.draw_roundrect_ext.x2 },
            { label: 'y2', documentation: i18n.draw_roundrect_ext.y2 },
            { label: 'radiusx', documentation: i18n.draw_roundrect_ext.radiusx },
            { label: 'radiusy', documentation: i18n.draw_roundrect_ext.radiusy },
            { label: 'outline', documentation: i18n.draw_roundrect_ext.outline }
        ],
        signature: '(x1, y1, x2, y2, radiusx, radiusy, outline)'
    },
	draw_self: {
        description: '[Function]' + i18n.draw_self.desc,
        available: datasimple.all
    },
	draw_set_alpha: {
        description: '[Function]' + i18n.draw_set_alpha.desc,
        available: datasimple.all,
        parameters: [
            { label: 'alpha', documentation: i18n.draw_set_alpha.alpha }
        ],
        signature: '(alpha)'
    },
	draw_set_alpha_test: {
        description: '[Function]' + i18n.draw_set_alpha_test.desc,
        available: datasimple.all,
        parameters: [
            { label: 'enable', documentation: i18n.draw_set_alpha_test.enable }
        ],
        signature: '(enable)'
    },
	draw_set_alpha_test_ref_value: {
        description: '[Function]' + i18n.draw_set_alpha_test_ref_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'value', documentation: i18n.draw_set_alpha_test_ref_value.value }
        ],
        signature: '(value)'
    },
	draw_set_blend_mode: {
        description: '[Function]' + i18n.draw_set_blend_mode.desc,
        available: datasimple.all,
        parameters: [
            { label: 'mode', documentation: i18n.draw_set_blend_mode.mode }
        ],
        signature: '(mode)'
    },
	draw_set_blend_mode_ext: {
        description: '[Function]' + i18n.draw_set_blend_mode_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'src', documentation: i18n.draw_set_blend_mode_ext.src },
            { label: 'dest', documentation: i18n.draw_set_blend_mode_ext.dest }
        ],
        signature: '(src, dest)'
    },
	draw_set_circle_precision: {
        description: '[Function]' + i18n.draw_set_circle_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'precision', documentation: i18n.draw_set_circle_precision.precision }
        ],
        signature: '(precision)'
    },
	draw_set_color: {
        description: '[Function]' + i18n.draw_set_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_set_color.col }
        ],
        signature: '(col)'
    },
	draw_set_color_write_enable: {
        description: '[Function]' + i18n.draw_set_color_write_enable.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.draw_set_color_write_enable.red },
            { label: 'green', documentation: i18n.draw_set_color_write_enable.green },
            { label: 'blue', documentation: i18n.draw_set_color_write_enable.blue },
            { label: 'alpha', documentation: i18n.draw_set_color_write_enable.alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	draw_set_colour: {
        description: '[Function]' + i18n.draw_set_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col', documentation: i18n.draw_set_colour.col }
        ],
        signature: '(col)'
    },
	draw_set_colour_write_enable: {
        description: '[Function]' + i18n.draw_set_colour_write_enable.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.draw_set_colour_write_enable.red },
            { label: 'green', documentation: i18n.draw_set_colour_write_enable.green },
            { label: 'blue', documentation: i18n.draw_set_colour_write_enable.blue },
            { label: 'alpha', documentation: i18n.draw_set_colour_write_enable.alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	draw_set_font: {
        description: '[Function]' + i18n.draw_set_font.desc,
        available: datasimple.all,
        parameters: [
            { label: 'font', documentation: i18n.draw_set_font.font }
        ],
        signature: '(font)'
    },
	draw_set_halign: {
        description: '[Function]' + i18n.draw_set_halign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'halign', documentation: i18n.draw_set_halign.halign }
        ],
        signature: '(halign)'
    },
	draw_set_swf_aa_level: {
        description: '[Function]' + i18n.draw_set_swf_aa_level.desc,
        available: datasimple.all,
        parameters: [
            { label: 'aa_level', documentation: i18n.draw_set_swf_aa_level.aa_level }
        ],
        signature: '(aa_level)'
    },
	draw_set_valign: {
        description: '[Function]' + i18n.draw_set_valign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'valign', documentation: i18n.draw_set_valign.valign }
        ],
        signature: '(valign)'
    },
	draw_skeleton: {
        description: '[Function]' + i18n.draw_skeleton.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_skeleton.sprite },
            { label: 'animname', documentation: i18n.draw_skeleton.animname },
            { label: 'animname', documentation: i18n.draw_skeleton.animname },
            { label: 'frame', documentation: i18n.draw_skeleton.frame },
            { label: 'x', documentation: i18n.draw_skeleton.x },
            { label: 'y', documentation: i18n.draw_skeleton.y },
            { label: 'xscale', documentation: i18n.draw_skeleton.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton.rot },
            { label: 'colour', documentation: i18n.draw_skeleton.colour },
            { label: 'alpha', documentation: i18n.draw_skeleton.alpha }
        ],
        signature: '(sprite, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_skeleton_collision: {
        description: '[Function]' + i18n.draw_skeleton_collision.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_skeleton_collision.sprite },
            { label: 'animname', documentation: i18n.draw_skeleton_collision.animname },
            { label: 'frame', documentation: i18n.draw_skeleton_collision.frame },
            { label: 'x', documentation: i18n.draw_skeleton_collision.x },
            { label: 'y', documentation: i18n.draw_skeleton_collision.y },
            { label: 'xscale', documentation: i18n.draw_skeleton_collision.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton_collision.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton_collision.rot },
            { label: 'colour', documentation: i18n.draw_skeleton_collision.colour }
        ],
        signature: '(sprite, animname, frame, x, y, xscale, yscale, rot, colour)'
    },
	draw_skeleton_instance: {
        description: '[Function]' + i18n.draw_skeleton_instance.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'instance', documentation: i18n.draw_skeleton_instance.instance },
            { label: 'animname', documentation: i18n.draw_skeleton_instance.animname },
            { label: 'animname', documentation: i18n.draw_skeleton_instance.animname },
            { label: 'frame', documentation: i18n.draw_skeleton_instance.frame },
            { label: 'x', documentation: i18n.draw_skeleton_instance.x },
            { label: 'y', documentation: i18n.draw_skeleton_instance.y },
            { label: 'xscale', documentation: i18n.draw_skeleton_instance.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton_instance.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton_instance.rot },
            { label: 'colour', documentation: i18n.draw_skeleton_instance.colour },
            { label: 'alpha', documentation: i18n.draw_skeleton_instance.alpha }
        ],
        signature: '(instance, animname, skinname, frame, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_skeleton_time: {
        description: '[Function]' + i18n.draw_skeleton_time.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_skeleton_time.sprite },
            { label: 'animname', documentation: i18n.draw_skeleton_time.animname },
            { label: 'animname', documentation: i18n.draw_skeleton_time.animname },
            { label: 'time', documentation: i18n.draw_skeleton_time.time },
            { label: 'x', documentation: i18n.draw_skeleton_time.x },
            { label: 'y', documentation: i18n.draw_skeleton_time.y },
            { label: 'xscale', documentation: i18n.draw_skeleton_time.xscale },
            { label: 'yscale', documentation: i18n.draw_skeleton_time.yscale },
            { label: 'rot', documentation: i18n.draw_skeleton_time.rot },
            { label: 'colour', documentation: i18n.draw_skeleton_time.colour },
            { label: 'alpha', documentation: i18n.draw_skeleton_time.alpha }
        ],
        signature: '(sprite, animname, skinname, time, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_sprite: {
        description: '[Function]' + i18n.draw_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite.subimg },
            { label: 'x', documentation: i18n.draw_sprite.x },
            { label: 'y', documentation: i18n.draw_sprite.y }
        ],
        signature: '(sprite, subimg, x, y)'
    },
	draw_sprite_ext: {
        description: '[Function]' + i18n.draw_sprite_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_ext.subimg },
            { label: 'x', documentation: i18n.draw_sprite_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_ext.y },
            { label: 'xscale', documentation: i18n.draw_sprite_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_ext.yscale },
            { label: 'rot', documentation: i18n.draw_sprite_ext.rot },
            { label: 'colour', documentation: i18n.draw_sprite_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_ext.alpha }
        ],
        signature: '(sprite, subimg, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_sprite_general: {
        description: '[Function]' + i18n.draw_sprite_general.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_general.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_general.subimg },
            { label: 'left', documentation: i18n.draw_sprite_general.left },
            { label: 'top', documentation: i18n.draw_sprite_general.top },
            { label: 'width', documentation: i18n.draw_sprite_general.width },
            { label: 'height', documentation: i18n.draw_sprite_general.height },
            { label: 'x', documentation: i18n.draw_sprite_general.x },
            { label: 'y', documentation: i18n.draw_sprite_general.y },
            { label: 'xscale', documentation: i18n.draw_sprite_general.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_general.yscale },
            { label: 'rot', documentation: i18n.draw_sprite_general.rot },
            { label: 'c1', documentation: i18n.draw_sprite_general.c1 },
            { label: 'c2', documentation: i18n.draw_sprite_general.c2 },
            { label: 'c3', documentation: i18n.draw_sprite_general.c3 },
            { label: 'c4', documentation: i18n.draw_sprite_general.c4 },
            { label: 'alpha', documentation: i18n.draw_sprite_general.alpha }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_sprite_part: {
        description: '[Function]' + i18n.draw_sprite_part.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_part.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_part.subimg },
            { label: 'left', documentation: i18n.draw_sprite_part.left },
            { label: 'top', documentation: i18n.draw_sprite_part.top },
            { label: 'width', documentation: i18n.draw_sprite_part.width },
            { label: 'height', documentation: i18n.draw_sprite_part.height },
            { label: 'x', documentation: i18n.draw_sprite_part.x },
            { label: 'y', documentation: i18n.draw_sprite_part.y }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y)'
    },
	draw_sprite_part_ext: {
        description: '[Function]' + i18n.draw_sprite_part_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_part_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_part_ext.subimg },
            { label: 'left', documentation: i18n.draw_sprite_part_ext.left },
            { label: 'top', documentation: i18n.draw_sprite_part_ext.top },
            { label: 'width', documentation: i18n.draw_sprite_part_ext.width },
            { label: 'height', documentation: i18n.draw_sprite_part_ext.height },
            { label: 'x', documentation: i18n.draw_sprite_part_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_part_ext.y },
            { label: 'xscale', documentation: i18n.draw_sprite_part_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_part_ext.yscale },
            { label: 'colour', documentation: i18n.draw_sprite_part_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_part_ext.alpha }
        ],
        signature: '(sprite, subimg, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_sprite_pos: {
        description: '[Function]' + i18n.draw_sprite_pos.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_pos.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_pos.subimg },
            { label: 'x1', documentation: i18n.draw_sprite_pos.x1 },
            { label: 'y1', documentation: i18n.draw_sprite_pos.y1 },
            { label: 'x2', documentation: i18n.draw_sprite_pos.x2 },
            { label: 'y2', documentation: i18n.draw_sprite_pos.y2 },
            { label: 'x3', documentation: i18n.draw_sprite_pos.x3 },
            { label: 'y3', documentation: i18n.draw_sprite_pos.y3 },
            { label: 'x4', documentation: i18n.draw_sprite_pos.x4 },
            { label: 'y4', documentation: i18n.draw_sprite_pos.y4 },
            { label: 'alpha', documentation: i18n.draw_sprite_pos.alpha }
        ],
        signature: '(sprite, subimg, x1, y1, x2, y2, x3, y3, x4, y4, alpha)'
    },
	draw_sprite_stretched: {
        description: '[Function]' + i18n.draw_sprite_stretched.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_stretched.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_stretched.subimg },
            { label: 'x', documentation: i18n.draw_sprite_stretched.x },
            { label: 'y', documentation: i18n.draw_sprite_stretched.y },
            { label: 'w', documentation: i18n.draw_sprite_stretched.w },
            { label: 'h', documentation: i18n.draw_sprite_stretched.h }
        ],
        signature: '(sprite, subimg, x, y, w, h)'
    },
	draw_sprite_stretched_ext: {
        description: '[Function]' + i18n.draw_sprite_stretched_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_stretched_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_stretched_ext.subimg },
            { label: 'x', documentation: i18n.draw_sprite_stretched_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_stretched_ext.y },
            { label: 'w', documentation: i18n.draw_sprite_stretched_ext.w },
            { label: 'h', documentation: i18n.draw_sprite_stretched_ext.h },
            { label: 'colour', documentation: i18n.draw_sprite_stretched_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_stretched_ext.alpha }
        ],
        signature: '(sprite, subimg, x, y, w, h, colour, alpha)'
    },
	draw_sprite_tiled: {
        description: '[Function]' + i18n.draw_sprite_tiled.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_tiled.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_tiled.subimg },
            { label: 'x', documentation: i18n.draw_sprite_tiled.x },
            { label: 'y', documentation: i18n.draw_sprite_tiled.y }
        ],
        signature: '(sprite, subimg, x, y)'
    },
	draw_sprite_tiled_ext: {
        description: '[Function]' + i18n.draw_sprite_tiled_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sprite', documentation: i18n.draw_sprite_tiled_ext.sprite },
            { label: 'subimg', documentation: i18n.draw_sprite_tiled_ext.subimg },
            { label: 'x', documentation: i18n.draw_sprite_tiled_ext.x },
            { label: 'y', documentation: i18n.draw_sprite_tiled_ext.y },
            { label: 'xscale', documentation: i18n.draw_sprite_tiled_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_sprite_tiled_ext.yscale },
            { label: 'colour', documentation: i18n.draw_sprite_tiled_ext.colour },
            { label: 'alpha', documentation: i18n.draw_sprite_tiled_ext.alpha }
        ],
        signature: '(sprite, subimg, x, y, xscale, yscale, colour, alpha)'
    },
	draw_surface: {
        description: '[Function]' + i18n.draw_surface.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface.id },
            { label: 'x', documentation: i18n.draw_surface.x },
            { label: 'y', documentation: i18n.draw_surface.y }
        ],
        signature: '(id, x, y)'
    },
	draw_surface_ext: {
        description: '[Function]' + i18n.draw_surface_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_ext.id },
            { label: 'x', documentation: i18n.draw_surface_ext.x },
            { label: 'y', documentation: i18n.draw_surface_ext.y },
            { label: 'xscale', documentation: i18n.draw_surface_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_ext.yscale },
            { label: 'rot', documentation: i18n.draw_surface_ext.rot },
            { label: 'colour', documentation: i18n.draw_surface_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_ext.alpha }
        ],
        signature: '(id, x, y, xscale, yscale, rot, colour, alpha)'
    },
	draw_surface_general: {
        description: '[Function]' + i18n.draw_surface_general.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_general.id },
            { label: 'left', documentation: i18n.draw_surface_general.left },
            { label: 'top', documentation: i18n.draw_surface_general.top },
            { label: 'width', documentation: i18n.draw_surface_general.width },
            { label: 'height', documentation: i18n.draw_surface_general.height },
            { label: 'x', documentation: i18n.draw_surface_general.x },
            { label: 'y', documentation: i18n.draw_surface_general.y },
            { label: 'xscale', documentation: i18n.draw_surface_general.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_general.yscale },
            { label: 'rot', documentation: i18n.draw_surface_general.rot },
            { label: 'c1', documentation: i18n.draw_surface_general.c1 },
            { label: 'c2', documentation: i18n.draw_surface_general.c2 },
            { label: 'c3', documentation: i18n.draw_surface_general.c3 },
            { label: 'c4', documentation: i18n.draw_surface_general.c4 },
            { label: 'alpha', documentation: i18n.draw_surface_general.alpha }
        ],
        signature: '(id, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
	draw_surface_part: {
        description: '[Function]' + i18n.draw_surface_part.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_part.id },
            { label: 'left', documentation: i18n.draw_surface_part.left },
            { label: 'top', documentation: i18n.draw_surface_part.top },
            { label: 'width', documentation: i18n.draw_surface_part.width },
            { label: 'height', documentation: i18n.draw_surface_part.height },
            { label: 'x', documentation: i18n.draw_surface_part.x },
            { label: 'y', documentation: i18n.draw_surface_part.y }
        ],
        signature: '(id, left, top, width, height, x, y)'
    },
	draw_surface_part_ext: {
        description: '[Function]' + i18n.draw_surface_part_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_part_ext.id },
            { label: 'left', documentation: i18n.draw_surface_part_ext.left },
            { label: 'top', documentation: i18n.draw_surface_part_ext.top },
            { label: 'width', documentation: i18n.draw_surface_part_ext.width },
            { label: 'height', documentation: i18n.draw_surface_part_ext.height },
            { label: 'x', documentation: i18n.draw_surface_part_ext.x },
            { label: 'y', documentation: i18n.draw_surface_part_ext.y },
            { label: 'xscale', documentation: i18n.draw_surface_part_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_part_ext.yscale },
            { label: 'colour', documentation: i18n.draw_surface_part_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_part_ext.alpha }
        ],
        signature: '(id, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
	draw_surface_stretched: {
        description: '[Function]' + i18n.draw_surface_stretched.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_stretched.id },
            { label: 'x', documentation: i18n.draw_surface_stretched.x },
            { label: 'y', documentation: i18n.draw_surface_stretched.y },
            { label: 'w', documentation: i18n.draw_surface_stretched.w },
            { label: 'h', documentation: i18n.draw_surface_stretched.h }
        ],
        signature: '(id, x, y, w, h)'
    },
	draw_surface_stretched_ext: {
        description: '[Function]' + i18n.draw_surface_stretched_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_stretched_ext.id },
            { label: 'x', documentation: i18n.draw_surface_stretched_ext.x },
            { label: 'y', documentation: i18n.draw_surface_stretched_ext.y },
            { label: 'w', documentation: i18n.draw_surface_stretched_ext.w },
            { label: 'h', documentation: i18n.draw_surface_stretched_ext.h },
            { label: 'colour', documentation: i18n.draw_surface_stretched_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_stretched_ext.alpha }
        ],
        signature: '(id, x, y, w, h, colour, alpha)'
    },
	draw_surface_tiled: {
        description: '[Function]' + i18n.draw_surface_tiled.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_tiled.id },
            { label: 'x', documentation: i18n.draw_surface_tiled.x },
            { label: 'y', documentation: i18n.draw_surface_tiled.y }
        ],
        signature: '(id, x, y)'
    },
	draw_surface_tiled_ext: {
        description: '[Function]' + i18n.draw_surface_tiled_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.draw_surface_tiled_ext.id },
            { label: 'x', documentation: i18n.draw_surface_tiled_ext.x },
            { label: 'y', documentation: i18n.draw_surface_tiled_ext.y },
            { label: 'xscale', documentation: i18n.draw_surface_tiled_ext.xscale },
            { label: 'yscale', documentation: i18n.draw_surface_tiled_ext.yscale },
            { label: 'colour', documentation: i18n.draw_surface_tiled_ext.colour },
            { label: 'alpha', documentation: i18n.draw_surface_tiled_ext.alpha }
        ],
        signature: '(id, x, y, xscale, yscale, colour, alpha)'
    },
	draw_text: {
        description: '[Function]' + i18n.draw_text.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text.x },
            { label: 'y', documentation: i18n.draw_text.y },
            { label: 'string', documentation: i18n.draw_text.string }
        ],
        signature: '(x, y, string)'
    },
	draw_texture_flush: {
        description: '[Function]' + i18n.draw_texture_flush.desc,
        available: datasimple.all
    },
	draw_text_color: {
        description: '[Function]' + i18n.draw_text_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_color.x },
            { label: 'y', documentation: i18n.draw_text_color.y },
            { label: 'string', documentation: i18n.draw_text_color.string },
            { label: 'c1', documentation: i18n.draw_text_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_color.alpha }
        ],
        signature: '(x, y, string, c1, c2, c3, c4, alpha)'
    },
	draw_text_colour: {
        description: '[Function]' + i18n.draw_text_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_colour.x },
            { label: 'y', documentation: i18n.draw_text_colour.y },
            { label: 'string', documentation: i18n.draw_text_colour.string },
            { label: 'c1', documentation: i18n.draw_text_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_colour.alpha }
        ],
        signature: '(x, y, string, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext: {
        description: '[Function]' + i18n.draw_text_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext.x },
            { label: 'y', documentation: i18n.draw_text_ext.y },
            { label: 'string', documentation: i18n.draw_text_ext.string },
            { label: 'sep', documentation: i18n.draw_text_ext.sep },
            { label: 'w', documentation: i18n.draw_text_ext.w }
        ],
        signature: '(x, y, string, sep, w)'
    },
	draw_text_ext_color: {
        description: '[Function]' + i18n.draw_text_ext_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_color.x },
            { label: 'y', documentation: i18n.draw_text_ext_color.y },
            { label: 'string', documentation: i18n.draw_text_ext_color.string },
            { label: 'sep', documentation: i18n.draw_text_ext_color.sep },
            { label: 'w', documentation: i18n.draw_text_ext_color.w },
            { label: 'c1', documentation: i18n.draw_text_ext_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_color.alpha }
        ],
        signature: '(x, y, string, sep, w, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_colour: {
        description: '[Function]' + i18n.draw_text_ext_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_colour.x },
            { label: 'y', documentation: i18n.draw_text_ext_colour.y },
            { label: 'string', documentation: i18n.draw_text_ext_colour.string },
            { label: 'sep', documentation: i18n.draw_text_ext_colour.sep },
            { label: 'w', documentation: i18n.draw_text_ext_colour.w },
            { label: 'c1', documentation: i18n.draw_text_ext_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_colour.alpha }
        ],
        signature: '(x, y, string, sep, w, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_transformed: {
        description: '[Function]' + i18n.draw_text_ext_transformed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_transformed.x },
            { label: 'y', documentation: i18n.draw_text_ext_transformed.y },
            { label: 'string', documentation: i18n.draw_text_ext_transformed.string },
            { label: 'sep', documentation: i18n.draw_text_ext_transformed.sep },
            { label: 'w', documentation: i18n.draw_text_ext_transformed.w },
            { label: 'xscale', documentation: i18n.draw_text_ext_transformed.xscale },
            { label: 'yscale', documentation: i18n.draw_text_ext_transformed.yscale },
            { label: 'angle', documentation: i18n.draw_text_ext_transformed.angle }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle)'
    },
	draw_text_ext_transformed_color: {
        description: '[Function]' + i18n.draw_text_ext_transformed_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_transformed_color.x },
            { label: 'y', documentation: i18n.draw_text_ext_transformed_color.y },
            { label: 'string', documentation: i18n.draw_text_ext_transformed_color.string },
            { label: 'sep', documentation: i18n.draw_text_ext_transformed_color.sep },
            { label: 'w', documentation: i18n.draw_text_ext_transformed_color.w },
            { label: 'xscale', documentation: i18n.draw_text_ext_transformed_color.xscale },
            { label: 'yscale', documentation: i18n.draw_text_ext_transformed_color.yscale },
            { label: 'angle', documentation: i18n.draw_text_ext_transformed_color.angle },
            { label: 'c1', documentation: i18n.draw_text_ext_transformed_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_transformed_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_transformed_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_transformed_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_transformed_color.alpha }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_ext_transformed_colour: {
        description: '[Function]' + i18n.draw_text_ext_transformed_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_ext_transformed_colour.x },
            { label: 'y', documentation: i18n.draw_text_ext_transformed_colour.y },
            { label: 'string', documentation: i18n.draw_text_ext_transformed_colour.string },
            { label: 'sep', documentation: i18n.draw_text_ext_transformed_colour.sep },
            { label: 'w', documentation: i18n.draw_text_ext_transformed_colour.w },
            { label: 'xscale', documentation: i18n.draw_text_ext_transformed_colour.xscale },
            { label: 'yscale', documentation: i18n.draw_text_ext_transformed_colour.yscale },
            { label: 'angle', documentation: i18n.draw_text_ext_transformed_colour.angle },
            { label: 'c1', documentation: i18n.draw_text_ext_transformed_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_ext_transformed_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_ext_transformed_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_ext_transformed_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_ext_transformed_colour.alpha }
        ],
        signature: '(x, y, string, sep, w, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_transformed: {
        description: '[Function]' + i18n.draw_text_transformed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_transformed.x },
            { label: 'y', documentation: i18n.draw_text_transformed.y },
            { label: 'string', documentation: i18n.draw_text_transformed.string },
            { label: 'xscale', documentation: i18n.draw_text_transformed.xscale },
            { label: 'yscale', documentation: i18n.draw_text_transformed.yscale },
            { label: 'angle', documentation: i18n.draw_text_transformed.angle }
        ],
        signature: '(x, y, string, xscale, yscale, angle)'
    },
	draw_text_transformed_color: {
        description: '[Function]' + i18n.draw_text_transformed_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_transformed_color.x },
            { label: 'y', documentation: i18n.draw_text_transformed_color.y },
            { label: 'string', documentation: i18n.draw_text_transformed_color.string },
            { label: 'xscale', documentation: i18n.draw_text_transformed_color.xscale },
            { label: 'yscale', documentation: i18n.draw_text_transformed_color.yscale },
            { label: 'angle', documentation: i18n.draw_text_transformed_color.angle },
            { label: 'c1', documentation: i18n.draw_text_transformed_color.c1 },
            { label: 'c2', documentation: i18n.draw_text_transformed_color.c2 },
            { label: 'c3', documentation: i18n.draw_text_transformed_color.c3 },
            { label: 'c4', documentation: i18n.draw_text_transformed_color.c4 },
            { label: 'alpha', documentation: i18n.draw_text_transformed_color.alpha }
        ],
        signature: '(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_text_transformed_colour: {
        description: '[Function]' + i18n.draw_text_transformed_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_text_transformed_colour.x },
            { label: 'y', documentation: i18n.draw_text_transformed_colour.y },
            { label: 'string', documentation: i18n.draw_text_transformed_colour.string },
            { label: 'xscale', documentation: i18n.draw_text_transformed_colour.xscale },
            { label: 'yscale', documentation: i18n.draw_text_transformed_colour.yscale },
            { label: 'angle', documentation: i18n.draw_text_transformed_colour.angle },
            { label: 'c1', documentation: i18n.draw_text_transformed_colour.c1 },
            { label: 'c2', documentation: i18n.draw_text_transformed_colour.c2 },
            { label: 'c3', documentation: i18n.draw_text_transformed_colour.c3 },
            { label: 'c4', documentation: i18n.draw_text_transformed_colour.c4 },
            { label: 'alpha', documentation: i18n.draw_text_transformed_colour.alpha }
        ],
        signature: '(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha)'
    },
	draw_triangle: {
        description: '[Function]' + i18n.draw_triangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_triangle.x1 },
            { label: 'y1', documentation: i18n.draw_triangle.y1 },
            { label: 'x2', documentation: i18n.draw_triangle.x2 },
            { label: 'y2', documentation: i18n.draw_triangle.y2 },
            { label: 'x3', documentation: i18n.draw_triangle.x3 },
            { label: 'y3', documentation: i18n.draw_triangle.y3 },
            { label: 'outline', documentation: i18n.draw_triangle.outline }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, outline)'
    },
	draw_triangle_color: {
        description: '[Function]' + i18n.draw_triangle_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_triangle_color.x1 },
            { label: 'y1', documentation: i18n.draw_triangle_color.y1 },
            { label: 'x2', documentation: i18n.draw_triangle_color.x2 },
            { label: 'y2', documentation: i18n.draw_triangle_color.y2 },
            { label: 'x3', documentation: i18n.draw_triangle_color.x3 },
            { label: 'y3', documentation: i18n.draw_triangle_color.y3 },
            { label: 'col1', documentation: i18n.draw_triangle_color.col1 },
            { label: 'col2', documentation: i18n.draw_triangle_color.col2 },
            { label: 'col3', documentation: i18n.draw_triangle_color.col3 },
            { label: 'outline', documentation: i18n.draw_triangle_color.outline }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)'
    },
	draw_triangle_colour: {
        description: '[Function]' + i18n.draw_triangle_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.draw_triangle_colour.x1 },
            { label: 'y1', documentation: i18n.draw_triangle_colour.y1 },
            { label: 'x2', documentation: i18n.draw_triangle_colour.x2 },
            { label: 'y2', documentation: i18n.draw_triangle_colour.y2 },
            { label: 'x3', documentation: i18n.draw_triangle_colour.x3 },
            { label: 'y3', documentation: i18n.draw_triangle_colour.y3 },
            { label: 'col1', documentation: i18n.draw_triangle_colour.col1 },
            { label: 'col2', documentation: i18n.draw_triangle_colour.col2 },
            { label: 'col3', documentation: i18n.draw_triangle_colour.col3 },
            { label: 'outline', documentation: i18n.draw_triangle_colour.outline }
        ],
        signature: '(x1, y1, x2, y2, x3, y3, col1, col2, col3, outline)'
    },
	draw_vertex: {
        description: '[Function]' + i18n.draw_vertex.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex.x },
            { label: 'y', documentation: i18n.draw_vertex.y }
        ],
        signature: '(x, y)'
    },
	draw_vertex_color: {
        description: '[Function]' + i18n.draw_vertex_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_color.x },
            { label: 'y', documentation: i18n.draw_vertex_color.y },
            { label: 'col', documentation: i18n.draw_vertex_color.col },
            { label: 'alpha', documentation: i18n.draw_vertex_color.alpha }
        ],
        signature: '(x, y, col, alpha)'
    },
	draw_vertex_colour: {
        description: '[Function]' + i18n.draw_vertex_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_colour.x },
            { label: 'y', documentation: i18n.draw_vertex_colour.y },
            { label: 'col', documentation: i18n.draw_vertex_colour.col },
            { label: 'alpha', documentation: i18n.draw_vertex_colour.alpha }
        ],
        signature: '(x, y, col, alpha)'
    },
	draw_vertex_texture: {
        description: '[Function]' + i18n.draw_vertex_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_texture.x },
            { label: 'y', documentation: i18n.draw_vertex_texture.y },
            { label: 'xtex', documentation: i18n.draw_vertex_texture.xtex },
            { label: 'ytex', documentation: i18n.draw_vertex_texture.ytex }
        ],
        signature: '(x, y, xtex, ytex)'
    },
	draw_vertex_texture_color: {
        description: '[Function]' + i18n.draw_vertex_texture_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_texture_color.x },
            { label: 'y', documentation: i18n.draw_vertex_texture_color.y },
            { label: 'xtex', documentation: i18n.draw_vertex_texture_color.xtex },
            { label: 'ytex', documentation: i18n.draw_vertex_texture_color.ytex },
            { label: 'col', documentation: i18n.draw_vertex_texture_color.col },
            { label: 'alpha', documentation: i18n.draw_vertex_texture_color.alpha }
        ],
        signature: '(x, y, xtex, ytex, col, alpha)'
    },
	draw_vertex_texture_colour: {
        description: '[Function]' + i18n.draw_vertex_texture_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.draw_vertex_texture_colour.x },
            { label: 'y', documentation: i18n.draw_vertex_texture_colour.y },
            { label: 'xtex', documentation: i18n.draw_vertex_texture_colour.xtex },
            { label: 'ytex', documentation: i18n.draw_vertex_texture_colour.ytex },
            { label: 'col', documentation: i18n.draw_vertex_texture_colour.col },
            { label: 'alpha', documentation: i18n.draw_vertex_texture_colour.alpha }
        ],
        signature: '(x, y, xtex, ytex, col, alpha)'
    },
	dsin: {
        description: '[Function]' + i18n.dsin.desc,
        parameters: [
            { label: 'degree_angle', documentation: i18n.dsin.degree_angle }
        ],
        signature: '(degree_angle)'
    },
	ds_exists: {
        description: '[Function]' + i18n.ds_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_exists.id },
            { label: 'type', documentation: i18n.ds_exists.type }
        ],
        signature: '(id, type)'
    },
	ds_grid_add: {
        description: '[Function]' + i18n.ds_grid_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add.id },
            { label: 'x', documentation: i18n.ds_grid_add.x },
            { label: 'y', documentation: i18n.ds_grid_add.y },
            { label: 'val', documentation: i18n.ds_grid_add.val }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_add_disk: {
        description: '[Function]' + i18n.ds_grid_add_disk.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add_disk.id },
            { label: 'xm', documentation: i18n.ds_grid_add_disk.xm },
            { label: 'ym', documentation: i18n.ds_grid_add_disk.ym },
            { label: 'r', documentation: i18n.ds_grid_add_disk.r },
            { label: 'val', documentation: i18n.ds_grid_add_disk.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_add_grid_region: {
        description: '[Function]' + i18n.ds_grid_add_grid_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add_grid_region.id },
            { label: 'source', documentation: i18n.ds_grid_add_grid_region.source },
            { label: 'x1', documentation: i18n.ds_grid_add_grid_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_add_grid_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_add_grid_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_add_grid_region.y2 },
            { label: 'xpos', documentation: i18n.ds_grid_add_grid_region.xpos },
            { label: 'ypos', documentation: i18n.ds_grid_add_grid_region.ypos }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_add_region: {
        description: '[Function]' + i18n.ds_grid_add_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_add_region.id },
            { label: 'x1', documentation: i18n.ds_grid_add_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_add_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_add_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_add_region.y2 },
            { label: 'val', documentation: i18n.ds_grid_add_region.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_clear: {
        description: '[Function]' + i18n.ds_grid_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_clear.id },
            { label: 'val', documentation: i18n.ds_grid_clear.val }
        ],
        signature: '(id, val)'
    },
	ds_grid_copy: {
        description: '[Function]' + i18n.ds_grid_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_copy.id },
            { label: 'source', documentation: i18n.ds_grid_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_grid_create: {
        description: '[Function]' + i18n.ds_grid_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'w', documentation: i18n.ds_grid_create.w },
            { label: 'h', documentation: i18n.ds_grid_create.h }
        ],
        signature: '(w, h)'
    },
	ds_grid_destroy: {
        description: '[Function]' + i18n.ds_grid_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_destroy.id }
        ],
        signature: '(id)'
    },
	ds_grid_get: {
        description: '[Function]' + i18n.ds_grid_get.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get.id },
            { label: 'x', documentation: i18n.ds_grid_get.x },
            { label: 'y', documentation: i18n.ds_grid_get.y }
        ],
        signature: '(id, x, y)'
    },
	ds_grid_get_disk_max: {
        description: '[Function]' + i18n.ds_grid_get_disk_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_max.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_max.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_max.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_max.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_mean: {
        description: '[Function]' + i18n.ds_grid_get_disk_mean.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_mean.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_mean.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_mean.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_mean.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_min: {
        description: '[Function]' + i18n.ds_grid_get_disk_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_min.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_min.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_min.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_min.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_disk_sum: {
        description: '[Function]' + i18n.ds_grid_get_disk_sum.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_disk_sum.id },
            { label: 'xm', documentation: i18n.ds_grid_get_disk_sum.xm },
            { label: 'ym', documentation: i18n.ds_grid_get_disk_sum.ym },
            { label: 'r', documentation: i18n.ds_grid_get_disk_sum.r }
        ],
        signature: '(id, xm, ym, r)'
    },
	ds_grid_get_max: {
        description: '[Function]' + i18n.ds_grid_get_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_max.id },
            { label: 'x1', documentation: i18n.ds_grid_get_max.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_max.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_max.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_max.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_mean: {
        description: '[Function]' + i18n.ds_grid_get_mean.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_mean.id },
            { label: 'x1', documentation: i18n.ds_grid_get_mean.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_mean.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_mean.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_mean.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_min: {
        description: '[Function]' + i18n.ds_grid_get_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_min.id },
            { label: 'x1', documentation: i18n.ds_grid_get_min.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_min.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_min.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_min.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_get_sum: {
        description: '[Function]' + i18n.ds_grid_get_sum.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_get_sum.id },
            { label: 'x1', documentation: i18n.ds_grid_get_sum.x1 },
            { label: 'y1', documentation: i18n.ds_grid_get_sum.y1 },
            { label: 'x2', documentation: i18n.ds_grid_get_sum.x2 },
            { label: 'y2', documentation: i18n.ds_grid_get_sum.y2 }
        ],
        signature: '(id, x1, y1, x2, y2)'
    },
	ds_grid_height: {
        description: '[Function]' + i18n.ds_grid_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_height.id }
        ],
        signature: '(id)'
    },
	ds_grid_multiply: {
        description: '[Function]' + i18n.ds_grid_multiply.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply.id },
            { label: 'x', documentation: i18n.ds_grid_multiply.x },
            { label: 'y', documentation: i18n.ds_grid_multiply.y },
            { label: 'val', documentation: i18n.ds_grid_multiply.val }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_multiply_disk: {
        description: '[Function]' + i18n.ds_grid_multiply_disk.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply_disk.id },
            { label: 'xm', documentation: i18n.ds_grid_multiply_disk.xm },
            { label: 'ym', documentation: i18n.ds_grid_multiply_disk.ym },
            { label: 'r', documentation: i18n.ds_grid_multiply_disk.r },
            { label: 'val', documentation: i18n.ds_grid_multiply_disk.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_multiply_grid_region: {
        description: '[Function]' + i18n.ds_grid_multiply_grid_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply_grid_region.id },
            { label: 'source', documentation: i18n.ds_grid_multiply_grid_region.source },
            { label: 'x1', documentation: i18n.ds_grid_multiply_grid_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_multiply_grid_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_multiply_grid_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_multiply_grid_region.y2 },
            { label: 'xpos', documentation: i18n.ds_grid_multiply_grid_region.xpos },
            { label: 'ypos', documentation: i18n.ds_grid_multiply_grid_region.ypos }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_multiply_region: {
        description: '[Function]' + i18n.ds_grid_multiply_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_multiply_region.id },
            { label: 'x1', documentation: i18n.ds_grid_multiply_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_multiply_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_multiply_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_multiply_region.y2 },
            { label: 'val', documentation: i18n.ds_grid_multiply_region.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_read: {
        description: '[Function]' + i18n.ds_grid_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_read.id },
            { label: 'str', documentation: i18n.ds_grid_read.str },
            { label: '...', documentation: i18n.ds_grid_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_grid_resize: {
        description: '[Function]' + i18n.ds_grid_resize.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_resize.id },
            { label: 'w', documentation: i18n.ds_grid_resize.w },
            { label: 'h', documentation: i18n.ds_grid_resize.h }
        ],
        signature: '(id, w, h)'
    },
	ds_grid_set: {
        description: '[Function]' + i18n.ds_grid_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set.id },
            { label: 'x', documentation: i18n.ds_grid_set.x },
            { label: 'y', documentation: i18n.ds_grid_set.y },
            { label: 'val', documentation: i18n.ds_grid_set.val }
        ],
        signature: '(id, x, y, val)'
    },
	ds_grid_set_disk: {
        description: '[Function]' + i18n.ds_grid_set_disk.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set_disk.id },
            { label: 'xm', documentation: i18n.ds_grid_set_disk.xm },
            { label: 'ym', documentation: i18n.ds_grid_set_disk.ym },
            { label: 'r', documentation: i18n.ds_grid_set_disk.r },
            { label: 'val', documentation: i18n.ds_grid_set_disk.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_set_grid_region: {
        description: '[Function]' + i18n.ds_grid_set_grid_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set_grid_region.id },
            { label: 'source', documentation: i18n.ds_grid_set_grid_region.source },
            { label: 'x1', documentation: i18n.ds_grid_set_grid_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_set_grid_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_set_grid_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_set_grid_region.y2 },
            { label: 'xpos', documentation: i18n.ds_grid_set_grid_region.xpos },
            { label: 'ypos', documentation: i18n.ds_grid_set_grid_region.ypos }
        ],
        signature: '(id, source, x1, y1, x2, y2, xpos, ypos)'
    },
	ds_grid_set_region: {
        description: '[Function]' + i18n.ds_grid_set_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_set_region.id },
            { label: 'x1', documentation: i18n.ds_grid_set_region.x1 },
            { label: 'y1', documentation: i18n.ds_grid_set_region.y1 },
            { label: 'x2', documentation: i18n.ds_grid_set_region.x2 },
            { label: 'y2', documentation: i18n.ds_grid_set_region.y2 },
            { label: 'val', documentation: i18n.ds_grid_set_region.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_shuffle: {
        description: '[Function]' + i18n.ds_grid_shuffle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_shuffle.id }
        ],
        signature: '(id)'
    },
	ds_grid_sort: {
        description: '[Function]' + i18n.ds_grid_sort.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_sort.id },
            { label: 'column', documentation: i18n.ds_grid_sort.column },
            { label: 'ascending', documentation: i18n.ds_grid_sort.ascending }
        ],
        signature: '(id, column, ascending)'
    },
	ds_grid_value_disk_exists: {
        description: '[Function]' + i18n.ds_grid_value_disk_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_disk_exists.id },
            { label: 'xm', documentation: i18n.ds_grid_value_disk_exists.xm },
            { label: 'ym', documentation: i18n.ds_grid_value_disk_exists.ym },
            { label: 'r', documentation: i18n.ds_grid_value_disk_exists.r },
            { label: 'val', documentation: i18n.ds_grid_value_disk_exists.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_disk_x: {
        description: '[Function]' + i18n.ds_grid_value_disk_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_disk_x.id },
            { label: 'xm', documentation: i18n.ds_grid_value_disk_x.xm },
            { label: 'ym', documentation: i18n.ds_grid_value_disk_x.ym },
            { label: 'r', documentation: i18n.ds_grid_value_disk_x.r },
            { label: 'val', documentation: i18n.ds_grid_value_disk_x.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_disk_y: {
        description: '[Function]' + i18n.ds_grid_value_disk_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_disk_y.id },
            { label: 'xm', documentation: i18n.ds_grid_value_disk_y.xm },
            { label: 'ym', documentation: i18n.ds_grid_value_disk_y.ym },
            { label: 'r', documentation: i18n.ds_grid_value_disk_y.r },
            { label: 'val', documentation: i18n.ds_grid_value_disk_y.val }
        ],
        signature: '(id, xm, ym, r, val)'
    },
	ds_grid_value_exists: {
        description: '[Function]' + i18n.ds_grid_value_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_exists.id },
            { label: 'x1', documentation: i18n.ds_grid_value_exists.x1 },
            { label: 'y1', documentation: i18n.ds_grid_value_exists.y1 },
            { label: 'x2', documentation: i18n.ds_grid_value_exists.x2 },
            { label: 'y2', documentation: i18n.ds_grid_value_exists.y2 },
            { label: 'val', documentation: i18n.ds_grid_value_exists.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_value_x: {
        description: '[Function]' + i18n.ds_grid_value_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_x.id },
            { label: 'x1', documentation: i18n.ds_grid_value_x.x1 },
            { label: 'y1', documentation: i18n.ds_grid_value_x.y1 },
            { label: 'x2', documentation: i18n.ds_grid_value_x.x2 },
            { label: 'y2', documentation: i18n.ds_grid_value_x.y2 },
            { label: 'val', documentation: i18n.ds_grid_value_x.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_value_y: {
        description: '[Function]' + i18n.ds_grid_value_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_value_y.id },
            { label: 'x1', documentation: i18n.ds_grid_value_y.x1 },
            { label: 'y1', documentation: i18n.ds_grid_value_y.y1 },
            { label: 'x2', documentation: i18n.ds_grid_value_y.x2 },
            { label: 'y2', documentation: i18n.ds_grid_value_y.y2 },
            { label: 'val', documentation: i18n.ds_grid_value_y.val }
        ],
        signature: '(id, x1, y1, x2, y2, val)'
    },
	ds_grid_width: {
        description: '[Function]' + i18n.ds_grid_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_width.id }
        ],
        signature: '(id)'
    },
	ds_grid_write: {
        description: '[Function]' + i18n.ds_grid_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_grid_write.id }
        ],
        signature: '(id)'
    },
	ds_list_add: {
        description: '[Function]' + i18n.ds_list_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_add.id },
            { label: 'value', documentation: i18n.ds_list_add.value },
            { label: '...', documentation: i18n.ds_list_add.more }
        ],
        signature: '(id, value, ...)'
    },
	ds_list_clear: {
        description: '[Function]' + i18n.ds_list_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_clear.id }
        ],
        signature: '(id)'
    },
	ds_list_copy: {
        description: '[Function]' + i18n.ds_list_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_copy.id },
            { label: 'source', documentation: i18n.ds_list_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_list_create: {
        description: '[Function]' + i18n.ds_list_create.desc,
        available: datasimple.all
    },
	ds_list_delete: {
        description: '[Function]' + i18n.ds_list_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_delete.id },
            { label: 'pos', documentation: i18n.ds_list_delete.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_destroy: {
        description: '[Function]' + i18n.ds_list_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_destroy.id }
        ],
        signature: '(id)'
    },
	ds_list_empty: {
        description: '[Function]' + i18n.ds_list_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_empty.id }
        ],
        signature: '(id)'
    },
	ds_list_find_index: {
        description: '[Function]' + i18n.ds_list_find_index.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_find_index.id },
            { label: 'value', documentation: i18n.ds_list_find_index.value }
        ],
        signature: '(id, value)'
    },
	ds_list_find_value: {
        description: '[Function]' + i18n.ds_list_find_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_find_value.id },
            { label: 'pos', documentation: i18n.ds_list_find_value.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_insert: {
        description: '[Function]' + i18n.ds_list_insert.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_insert.id },
            { label: 'pos', documentation: i18n.ds_list_insert.pos },
            { label: 'value', documentation: i18n.ds_list_insert.value }
        ],
        signature: '(id, pos, value)'
    },
	ds_list_mark_as_list: {
        description: '[Function]' + i18n.ds_list_mark_as_list.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_mark_as_list.id },
            { label: 'pos', documentation: i18n.ds_list_mark_as_list.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_mark_as_map: {
        description: '[Function]' + i18n.ds_list_mark_as_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_mark_as_map.id },
            { label: 'pos', documentation: i18n.ds_list_mark_as_map.pos }
        ],
        signature: '(id, pos)'
    },
	ds_list_read: {
        description: '[Function]' + i18n.ds_list_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_read.id },
            { label: 'str', documentation: i18n.ds_list_read.str },
            { label: '...', documentation: i18n.ds_list_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_list_replace: {
        description: '[Function]' + i18n.ds_list_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_replace.id },
            { label: 'pos', documentation: i18n.ds_list_replace.pos },
            { label: 'value', documentation: i18n.ds_list_replace.value }
        ],
        signature: '(id, pos, value)'
    },
	ds_list_shuffle: {
        description: '[Function]' + i18n.ds_list_shuffle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_shuffle.id }
        ],
        signature: '(id)'
    },
	ds_list_size: {
        description: '[Function]' + i18n.ds_list_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_size.id }
        ],
        signature: '(id)'
    },
	ds_list_sort: {
        description: '[Function]' + i18n.ds_list_sort.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_sort.id },
            { label: 'ascending', documentation: i18n.ds_list_sort.ascending }
        ],
        signature: '(id, ascending)'
    },
	ds_list_write: {
        description: '[Function]' + i18n.ds_list_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_list_write.id }
        ],
        signature: '(id)'
    },
	ds_map_add: {
        description: '[Function]' + i18n.ds_map_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_add.id },
            { label: 'key', documentation: i18n.ds_map_add.key },
            { label: 'value', documentation: i18n.ds_map_add.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_add_list: {
        description: '[Function]' + i18n.ds_map_add_list.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_add_list.id },
            { label: 'key', documentation: i18n.ds_map_add_list.key },
            { label: 'value', documentation: i18n.ds_map_add_list.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_add_map: {
        description: '[Function]' + i18n.ds_map_add_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_add_map.id },
            { label: 'key', documentation: i18n.ds_map_add_map.key },
            { label: 'value', documentation: i18n.ds_map_add_map.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_clear: {
        description: '[Function]' + i18n.ds_map_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_clear.id }
        ],
        signature: '(id)'
    },
	ds_map_copy: {
        description: '[Function]' + i18n.ds_map_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_copy.id },
            { label: 'source', documentation: i18n.ds_map_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_map_create: {
        description: '[Function]' + i18n.ds_map_create.desc,
        available: datasimple.all
    },
	ds_map_delete: {
        description: '[Function]' + i18n.ds_map_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_delete.id },
            { label: 'key', documentation: i18n.ds_map_delete.key }
        ],
        signature: '(id, key)'
    },
	ds_map_destroy: {
        description: '[Function]' + i18n.ds_map_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_destroy.id }
        ],
        signature: '(id)'
    },
	ds_map_empty: {
        description: '[Function]' + i18n.ds_map_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_empty.id }
        ],
        signature: '(id)'
    },
	ds_map_exists: {
        description: '[Function]' + i18n.ds_map_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_exists.id },
            { label: 'key', documentation: i18n.ds_map_exists.key }
        ],
        signature: '(id, key)'
    },
	ds_map_find_first: {
        description: '[Function]' + i18n.ds_map_find_first.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_first.id }
        ],
        signature: '(id)'
    },
	ds_map_find_last: {
        description: '[Function]' + i18n.ds_map_find_last.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_last.id }
        ],
        signature: '(id)'
    },
	ds_map_find_next: {
        description: '[Function]' + i18n.ds_map_find_next.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_next.id },
            { label: 'key', documentation: i18n.ds_map_find_next.key }
        ],
        signature: '(id, key)'
    },
	ds_map_find_previous: {
        description: '[Function]' + i18n.ds_map_find_previous.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_previous.id },
            { label: 'key', documentation: i18n.ds_map_find_previous.key }
        ],
        signature: '(id, key)'
    },
	ds_map_find_value: {
        description: '[Function]' + i18n.ds_map_find_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_find_value.id },
            { label: 'key', documentation: i18n.ds_map_find_value.key }
        ],
        signature: '(id, key)'
    },
	ds_map_read: {
        description: '[Function]' + i18n.ds_map_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_read.id },
            { label: 'str', documentation: i18n.ds_map_read.str },
            { label: '...', documentation: i18n.ds_map_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_map_replace: {
        description: '[Function]' + i18n.ds_map_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_replace.id },
            { label: 'key', documentation: i18n.ds_map_replace.key },
            { label: 'value', documentation: i18n.ds_map_replace.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_replace_list: {
        description: '[Function]' + i18n.ds_map_replace_list.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_replace_list.id },
            { label: 'key', documentation: i18n.ds_map_replace_list.key },
            { label: 'value', documentation: i18n.ds_map_replace_list.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_replace_map: {
        description: '[Function]' + i18n.ds_map_replace_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_replace_map.id },
            { label: 'key', documentation: i18n.ds_map_replace_map.key },
            { label: 'value', documentation: i18n.ds_map_replace_map.value }
        ],
        signature: '(id, key, value)'
    },
	ds_map_secure_load: {
        description: '[Function]' + i18n.ds_map_secure_load.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filename', documentation: i18n.ds_map_secure_load.filename }
        ],
        signature: '(filename)'
    },
	ds_map_secure_load_buffer: {
        description: '[Function]' + i18n.ds_map_secure_load_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'buffer', documentation: i18n.ds_map_secure_load_buffer.buffer }
        ],
        signature: '(buffer)'
    },
	ds_map_secure_save: {
        description: '[Function]' + i18n.ds_map_secure_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_secure_save.id },
            { label: 'filename', documentation: i18n.ds_map_secure_save.filename }
        ],
        signature: '(id, filename)'
    },
	ds_map_secure_save_buffer: {
        description: '[Function]' + i18n.ds_map_secure_save_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_secure_save_buffer.id },
            { label: 'buffer', documentation: i18n.ds_map_secure_save_buffer.buffer }
        ],
        signature: '(id, buffer)'
    },
	ds_map_size: {
        description: '[Function]' + i18n.ds_map_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_size.id }
        ],
        signature: '(id)'
    },
	ds_map_write: {
        description: '[Function]' + i18n.ds_map_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_map_write.id }
        ],
        signature: '(id)'
    },
	ds_priority_add: {
        description: '[Function]' + i18n.s_priority_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.s_priority_add.id },
            { label: 'value', documentation: i18n.s_priority_add.value },
            { label: 'priority', documentation: i18n.ds_priority_add.priority }
        ],
        signature: '(id, value, priority)'
    },
	ds_priority_change_priority: {
        description: '[Function]' + i18n.ds_priority_change_priority.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_change_priority.id },
            { label: 'value', documentation: i18n.ds_priority_change_priority.value },
            { label: 'priority', documentation: i18n.ds_priority_change_priority.priority }
        ],
        signature: '(id, value, priority)'
    },
	ds_priority_clear: {
        description: '[Function]' + i18n.ds_priority_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_clear.id }
        ],
        signature: '(id)'
    },
	ds_priority_copy: {
        description: '[Function]' + i18n.ds_priority_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_copy.id },
            { label: 'source', documentation: i18n.ds_priority_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_priority_create: {
        description: '[Function]' + i18n.ds_priority_create.desc,
        available: datasimple.all
    },
	ds_priority_delete_max: {
        description: '[Function]' + i18n.ds_priority_delete_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_delete_max.id }
        ],
        signature: '(id)'
    },
	ds_priority_delete_min: {
        description: '[Function]' + i18n.ds_priority_delete_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_delete_min.id }
        ],
        signature: '(id)'
    },
	ds_priority_delete_value: {
        description: '[Function]' + i18n.ds_priority_delete_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_delete_value.id },
            { label: 'value', documentation: i18n.ds_priority_delete_value.value }
        ],
        signature: '(id, value)'
    },
	ds_priority_destroy: {
        description: '[Function]' + i18n.ds_priority_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_destroy.id }
        ],
        signature: '(id)'
    },
	ds_priority_empty: {
        description: '[Function]' + i18n.ds_priority_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_empty.id }
        ],
        signature: '(id)'
    },
	ds_priority_find_max: {
        description: '[Function]' + i18n.ds_priority_find_max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_find_max.id }
        ],
        signature: '(id)'
    },
	ds_priority_find_min: {
        description: '[Function]' + i18n.ds_priority_find_min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_find_min.id }
        ],
        signature: '(id)'
    },
	ds_priority_find_priority: {
        description: '[Function]' + i18n.ds_priority_find_priority.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_find_priority.id },
            { label: 'value', documentation: i18n.ds_priority_find_priority.value }
        ],
        signature: '(id, value)'
    },
	ds_priority_read: {
        description: '[Function]' + i18n.ds_priority_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_read.id },
            { label: 'str', documentation: i18n.ds_priority_read.str },
            { label: '...', documentation: i18n.ds_priority_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_priority_size: {
        description: '[Function]' + i18n.ds_priority_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_size.id }
        ],
        signature: '(id)'
    },
	ds_priority_write: {
        description: '[Function]' + i18n.ds_priority_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_priority_write.id }
        ],
        signature: '(id)'
    },
	ds_queue_clear: {
        description: '[Function]' + i18n.ds_queue_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_clear.id }
        ],
        signature: '(id)'
    },
	ds_queue_copy: {
        description: '[Function]' + i18n.ds_queue_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_copy.id },
            { label: 'source', documentation: i18n.ds_queue_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_queue_create: {
        description: '[Function]' + i18n.ds_queue_create.desc,
        available: datasimple.all
    },
	ds_queue_dequeue: {
        description: '[Function]' + i18n.ds_queue_dequeue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_dequeue.id }
        ],
        signature: '(id)'
    },
	ds_queue_destroy: {
        description: '[Function]' + i18n.ds_queue_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_destroy.id }
        ],
        signature: '(id)'
    },
	ds_queue_empty: {
        description: '[Function]' + i18n.ds_queue_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_empty.id }
        ],
        signature: '(id)'
    },
	ds_queue_enqueue: {
        description: '[Function]' + i18n.ds_queue_enqueue.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_enqueue.id },
            { label: 'value', documentation: i18n.ds_queue_enqueue.value },
            { label: '...', documentation: i18n.ds_queue_enqueue.more }
        ],
        signature: '(id, value, ...)'
    },
	ds_queue_head: {
        description: '[Function]' + i18n.ds_queue_head.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_head.id }
        ],
        signature: '(id)'
    },
	ds_queue_read: {
        description: '[Function]' + i18n.ds_queue_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_read.id },
            { label: 'str', documentation: i18n.ds_queue_read.str },
            { label: '...', documentation: i18n.ds_queue_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_queue_size: {
        description: '[Function]' + i18n.ds_queue_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_size.id }
        ],
        signature: '(id)'
    },
	ds_queue_tail: {
        description: '[Function]' + i18n.ds_queue_tail.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_tail.id }
        ],
        signature: '(id)'
    },
	ds_queue_write: {
        description: '[Function]' + i18n.ds_queue_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_queue_write.id }
        ],
        signature: '(id)'
    },
	ds_set_precision: {
        description: '[Function]' + i18n.ds_set_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'prec', documentation: i18n.ds_set_precision.prec }
        ],
        signature: '(prec)'
    },
	ds_stack_clear: {
        description: '[Function]' + i18n.ds_stack_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_clear.id }
        ],
        signature: '(id)'
    },
	ds_stack_copy: {
        description: '[Function]' + i18n.ds_stack_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_copy.id },
            { label: 'source', documentation: i18n.ds_stack_copy.source }
        ],
        signature: '(id, source)'
    },
	ds_stack_create: {
        description: '[Function]' + i18n.ds_stack_create.desc,
        available: datasimple.all
    },
	ds_stack_destroy: {
        description: '[Function]' + i18n.ds_stack_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_destroy.id }
        ],
        signature: '(id)'
    },
	ds_stack_empty: {
        description: '[Function]' + i18n.ds_stack_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_empty.id }
        ],
        signature: '(id)'
    },
	ds_stack_pop: {
        description: '[Function]' + i18n.ds_stack_pop.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_pop.id }
        ],
        signature: '(id)'
    },
	ds_stack_push: {
        description: '[Function]' + i18n.ds_stack_push.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_push.id },
            { label: 'value', documentation: i18n.ds_stack_push.value },
            { label: '...', documentation: i18n.ds_stack_push.more }
        ],
        signature: '(id, value, ...)'
    },
	ds_stack_read: {
        description: '[Function]' + i18n.ds_stack_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_read.id },
            { label: 'str', documentation: i18n.ds_stack_read.str },
            { label: '...', documentation: i18n.ds_stack_read.more }
        ],
        signature: '(id, str, ...)'
    },
	ds_stack_size: {
        description: '[Function]' + i18n.ds_stack_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_size.id }
        ],
        signature: '(id)'
    },
	ds_stack_top: {
        description: '[Function]' + i18n.ds_stack_top.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_top.id }
        ],
        signature: '(id)'
    },
	ds_stack_write: {
        description: '[Function]' + i18n.ds_stack_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.ds_stack_write.id }
        ],
        signature: '(id)'
    },
	dtan: {
        description: '[Function]' + i18n.dtan.desc,
        available: datasimple.all,
        parameters: [
            { label: 'degree_angle', documentation: i18n.dtan.degree_angle }
        ],
        signature: '(degree_angle)'
    },
	effect_clear: {
        description: '[Function]' + i18n.effect_clear.desc,
        available: datasimple.all
    },
	effect_create_above: {
        description: '[Function]' + i18n.effect_create_above.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.effect_create_above.kind },
            { label: 'x', documentation: i18n.effect_create_above.x },
            { label: 'y', documentation: i18n.effect_create_above.y },
            { label: 'size', documentation: i18n.effect_create_above.size },
            { label: 'colour', documentation: i18n.effect_create_above.colour }
        ],
        signature: '(kind, x, y, size, colour)'
    },
	effect_create_below: {
        description: '[Function]' + i18n.effect_create_below.desc,
        available: datasimple.all,
        parameters: [
            { label: 'kind', documentation: i18n.effect_create_below.kind },
            { label: 'x', documentation: i18n.effect_create_below.x },
            { label: 'y', documentation: i18n.effect_create_below.y },
            { label: 'size', documentation: i18n.effect_create_below.size },
            { label: 'colour', documentation: i18n.effect_create_below.colour }
        ],
        signature: '(kind, x, y, size, colour)'
    },
	environment_get_variable: {
        description: '[Function]' + i18n.environment_get_variable.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.environment_get_variable.name }
        ],
        signature: '(name)'
    },
	event_inherited: {
        description: '[Function]' + i18n.event_inherited.desc,
        available: datasimple.all
    },
	event_perform: {
        description: '[Function]' + i18n.event_perform.desc,
        available: datasimple.all,
        parameters: [
            { label: 'type', documentation: i18n.event_perform.type },
            { label: 'numb', documentation: i18n.event_perform.numb }
        ],
        signature: '(type, numb)'
    },
	event_perform_object: {
        description: '[Function]' + i18n.event_perform_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.event_perform_object.obj },
            { label: 'type', documentation: i18n.event_perform_object.type },
            { label: 'numb', documentation: i18n.event_perform_object.numb }
        ],
        signature: '(obj, type, numb)'
    },
	event_user: {
        description: '[Function]' + i18n.event_user.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.event_user.numb }
        ],
        signature: '(numb)'
    },
	exp: {
        description: '[Function]' + i18n.exp.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.exp.x }
        ],
        signature: '(x)'
    },
	external_call: {
        description: '[Function]' + i18n.external_call.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.external_call.id },
            { label: 'arg1', documentation: i18n.external_call.arg1 },
            { label: 'arg2', documentation: i18n.external_call.arg2 },
            { label: '...', documentation: i18n.external_call.more }
        ],
        signature: '(id, arg1, arg2, ...)'
    },
	external_define: {
        description: '[Function]' + i18n.external_define.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dll', documentation: i18n.external_define.dll },
            { label: 'name', documentation: i18n.external_define.name },
            { label: 'calltype', documentation: i18n.external_define.calltype },
            { label: 'restype', documentation: i18n.external_defin.restype },
            { label: 'argnumb', documentation: i18n.external_define.argnumb },
            { label: 'arg1type', documentation: i18n.external_define.arg1type },
            { label: 'arg2type', documentation: i18n.external_define.arg2type },
            { label: '...', documentation: i18n.external_define.more }
        ],
        signature: '(dll, name, calltype, restype, argnumb, arg1type, arg2type, ...)'
    },
	external_free: {
        description: '[Function]' + i18n.external_free.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dllname', documentation: i18n.external_free.dllname }
        ],
        signature: '(dllname)'
    },
	facebook_accesstoken: {
        description: '[Function]' + i18n.facebook_accesstoken.desc,
        available: datasimple.gms1
    },
	facebook_check_permission: {
        description: '[Function]' + i18n.facebook_check_permission.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'permission', documentation: i18n.facebook_check_permission.permission }
        ],
        signature: '(permission)'
    },
	facebook_dialog: {
        description: '[Function]' + i18n.facebook_dialog.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'graph_path', documentation: i18n.facebook_dialog.graph_path },
            { label: 'ds_map_params', documentation: i18n.facebook_dialog.ds_map_params },
            { label: 'ds_map_response', documentation: i18n.facebook_dialog.ds_map_response }
        ],
        signature: '(graph_path, ds_map_params, ds_map_response)'
    },
	facebook_graph_request: {
        description: '[Function]' + i18n.facebook_graph_request.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'graph_path', documentation: i18n.facebook_graph_request.graph_path },
            { label: 'httpMethod', documentation: i18n.facebook_graph_request.httpMethod },
            { label: 'ds_map_params', documentation: i18n.facebook_graph_request.ds_map_params },
            { label: 'ds_map_response', documentation: i18n.facebook_graph_request.ds_map_response }
        ],
        signature: '(graph_path, httpMethod, ds_map_params, ds_map_response)'
    },
	facebook_init: {
        description: '[Function]' + i18n.facebook_init.desc,
        available: datasimple.gms1
    },
	facebook_launch_offerwall: {
        description: '[Function]' + i18n.facebook_launch_offerwall.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_url', documentation: i18n.facebook_launch_offerwall.product_url }
        ],
        signature: '(product_url)'
    },
	facebook_login: {
        description: '[Function]' + i18n.facebook_login.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list_of_permissions', documentation: i18n.facebook_login.ds_list_of_permissions },
            { label: 'ios_login_type', documentation: i18n.facebook_login.ios_login_type }
        ],
        signature: '(ds_list_of_permissions, ios_login_type)'
    },
	facebook_logout: {
        description: '[Function]' + i18n.facebook_logout.desc,
        available: datasimple.gms1
    },
	facebook_post_message: {
        description: '[Function]' + i18n.facebook_post_message.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'title', documentation: i18n.facebook_post_message.title },
            { label: 'caption', documentation: i18n.facebook_post_message.caption },
            { label: 'message', documentation: i18n.facebook_post_message.message },
            { label: 'picture_url', documentation: i18n.facebook_post_message.picture_url },
            { label: 'redirect_url', documentation: i18n.facebook_post_message.redirect_url },
            { label: 'actionname', documentation: i18n.facebook_post_message.actionname },
            { label: 'action_url', documentation: i18n.facebook_post_message.action_url }
        ],
        signature: '(title, caption, message, picture_url, redirect_url, actionname, action_url)'
    },
	facebook_request_publish_permissions: {
        description: '[Function]' + i18n.facebook_request_publish_permissions.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list_permissions', documentation: i18n.facebook_request_publish_permissions.ds_list_permissions }
        ],
        signature: '(ds_list_permissions)'
    },
	facebook_request_read_permissions: {
        description: '[Function]' + i18n.facebook_request_read_permissions.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list_permissions', documentation: i18n.facebook_request_read_permissions.ds_list_permissions }
        ],
        signature: '(ds_list_permissions)'
    },
	facebook_send_invite: {
        description: '[Function]' + i18n.facebook_send_invite.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'title', documentation: i18n.facebook_send_invite.title },
            { label: 'message', documentation: i18n.facebook_send_invite.message },
            { label: 'picture_url', documentation: i18n.facebook_send_invite.picture_url },
            { label: 'redirect_url', documentation: i18n.facebook_send_invite.redirect_url },
            { label: 'ds_map_response', documentation: i18n.facebook_send_invite.ds_map_response }
        ],
        signature: '(title, message, picture_url, redirect_url, ds_map_response)'
    },
	facebook_status: {
        description: '[Function]' + i18n.facebook_status.desc,
        available: datasimple.gms1
    },
	facebook_user_id: {
        description: '[Function]' + i18n.facebook_user_id.desc,
        available: datasimple.gms1
    },
	filename_change_ext: {
        description: '[Function]' + i18n.filename_change_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_change_ext.fname },
            { label: 'newext', documentation: i18n.filename_change_ext.newext }
        ],
        signature: '(fname, newext)'
    },
	filename_dir: {
        description: '[Function]' + i18n.filename_dir.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_dir.fname }
        ],
        signature: '(fname)'
    },
	filename_drive: {
        description: '[Function]' + i18n.filename_drive.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_drive.fname }
        ],
        signature: '(fname)'
    },
	filename_ext: {
        description: '[Function]' + i18n.filename_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_ext.fname }
        ],
        signature: '(fname)'
    },
	filename_name: {
        description: '[Function]' + i18n.filename_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_name.fname }
        ],
        signature: '(fname)'
    },
	filename_path: {
        description: '[Function]' + i18n.filename_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.filename_path.fname }
        ],
        signature: '(fname)'
    },
	file_attributes: {
        description: '[Function]' + i18n.file_attributes.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_attributes.fname },
            { label: 'attr', documentation: i18n.file_attributes.attr }
        ],
        signature: '(fname, attr)'
    },
	file_bin_close: {
        description: '[Function]' + i18n.file_bin_close.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_close.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_open: {
        description: '[Function]' + i18n.file_bin_open.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_bin_open.fname },
            { label: 'mode', documentation: i18n.file_bin_open.mode }
        ],
        signature: '(fname, mode)'
    },
	file_bin_position: {
        description: '[Function]' + i18n.file_bin_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_position.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_read_byte: {
        description: '[Function]' + i18n.file_bin_read_byte.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_read_byte.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_rewrite: {
        description: '[Function]' + i18n.file_bin_rewrite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_rewrite.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_seek: {
        description: '[Function]' + i18n.file_bin_seek.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_seek.binfile },
            { label: 'pos', documentation: i18n.file_bin_seek.pos }
        ],
        signature: '(binfile, pos)'
    },
	file_bin_size: {
        description: '[Function]' + i18n.file_bin_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_size.binfile }
        ],
        signature: '(binfile)'
    },
	file_bin_write_byte: {
        description: '[Function]' + i18n.file_bin_write_byte.desc,
        available: datasimple.all,
        parameters: [
            { label: 'binfile', documentation: i18n.file_bin_write_byte.binfile },
            { label: 'byte', documentation: i18n.file_bin_write_byte.byte }
        ],
        signature: '(binfile, byte)'
    },
	file_copy: {
        description: '[Function]' + i18n.file_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_copy.fname },
            { label: 'newname', documentation: i18n.file_copy.newname }
        ],
        signature: '(fname, newname)'
    },
	file_delete: {
        description: '[Function]' + i18n.file_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_delete.fname }
        ],
        signature: '(fname)'
    },
	file_exists: {
        description: '[Function]' + i18n.file_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_exists.fname }
        ],
        signature: '(fname)'
    },
	file_find_close: {
        description: '[Function]' + i18n.file_find_close.desc,
        available: datasimple.all
    },
	file_find_first: {
        description: '[Function]' + i18n.file_find_first.desc,
        available: datasimple.all,
        parameters: [
            { label: 'mask', documentation: i18n.file_find_first.mask },
            { label: 'attr', documentation: i18n.file_find_first.attr }
        ],
        signature: '(mask, attr)'
    },
	file_find_next: {
        description: '[Function]' + i18n.file_find_next.desc,
        available: datasimple.all
    },
	file_rename: {
        description: '[Function]' + i18n.file_rename.desc,
        available: datasimple.all,
        parameters: [
            { label: 'oldname', documentation: i18n.file_rename.oldname },
            { label: 'newname', documentation: i18n.file_rename.newname }
        ],
        signature: '(oldname, newname)'
    },
	file_text_close: {
        description: '[Function]' + i18n.file_text_close.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_close.file }
        ],
        signature: '(file)'
    },
	file_text_eof: {
        description: '[Function]' + i18n.file_text_eof.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_eof.file }
        ],
        signature: '(file)'
    },
	file_text_eoln: {
        description: '[Function]' + i18n.file_text_eoln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_eoln.file }
        ],
        signature: '(file)'
    },
	file_text_open_append: {
        description: '[Function]' + i18n.file_text_open_append.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_text_open_append.fname }
        ],
        signature: '(fname)'
    },
	file_text_open_from_string: {
        description: '[Function]' + i18n.file_text_open_from_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'content', documentation: i18n.file_text_open_from_string.content }
        ],
        signature: '(content)'
    },
	file_text_open_read: {
        description: '[Function]' + i18n.file_text_open_read.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_text_open_read.fname }
        ],
        signature: '(fname)'
    },
	file_text_open_write: {
        description: '[Function]' + i18n.file_text_open_write.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.file_text_open_write.fname }
        ],
        signature: '(fname)'
    },
	file_text_readln: {
        description: '[Function]' + i18n.file_text_readln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_readln.file }
        ],
        signature: '(file)'
    },
	file_text_read_real: {
        description: '[Function]' + i18n.file_text_read_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_read_real.file }
        ],
        signature: '(file)'
    },
	file_text_read_string: {
        description: '[Function]' + i18n.file_text_read_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_read_string.file }
        ],
        signature: '(file)'
    },
	file_text_writeln: {
        description: '[Function]' + i18n.file_text_writeln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_writeln.file }
        ],
        signature: '(file)'
    },
	file_text_write_real: {
        description: '[Function]' + i18n.file_text_write_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_write_real.file },
            { label: 'val', documentation: i18n.file_text_write_real.val }
        ],
        signature: '(file, val)'
    },
	file_text_write_string: {
        description: '[Function]' + i18n.file_text_write_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'file', documentation: i18n.file_text_write_string.file },
            { label: 'str', documentation: i18n.file_text_write_string.str }
        ],
        signature: '(file, str)'
    },
	floor: {
        description: '[Function]' + i18n.floor.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.floor.x }
        ],
        signature: '(x)'
    },
	font_add: {
        description: '[Function]' + i18n.font_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n.font_add.name },
            { label: 'size', documentation: i18n.font_add.size },
            { label: 'bold', documentation: i18n.font_add.bold },
            { label: 'italic', documentation: i18n.font_add.italic },
            { label: 'first', documentation: i18n.font_add.first },
            { label: 'last', documentation: i18n.font_add.last }
        ],
        signature: '(name, size, bold, italic, first, last)'
    },
	font_add_sprite: {
        description: '[Function]' + i18n.font_add_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n.font_add_sprite.spr },
            { label: 'first', documentation: i18n.font_add_sprite.first },
            { label: 'prop', documentation: i18n.font_add_sprite.prop },
            { label: 'sep', documentation: i18n.font_add_sprite.sep }
        ],
        signature: '(spr, first, prop, sep)'
    },
	font_add_sprite_ext: {
        description: '[Function]' + i18n.font_add_sprite_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n.font_add_sprite_ext.spr },
            { label: 'mapstring', documentation: i18n.font_add_sprite_ext.mapstring },
            { label: 'prop', documentation: i18n.font_add_sprite_ext.prop },
            { label: 'sep', documentation: i18n.font_add_sprite_ext.sep }
        ],
        signature: '(spr, mapstring, prop, sep)'
    },
	font_delete: {
        description: '[Function]' + i18n.font_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_delete.ind }
        ],
        signature: '(ind)'
    },
	font_exists: {
        description: '[Function]' + i18n.font_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_exists.ind }
        ],
        signature: '(ind)'
    },
	font_get_bold: {
        description: '[Function]' + i18n.font_get_bold.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_bold.ind }
        ],
        signature: '(ind)'
    },
	font_get_first: {
        description: '[Function]' + i18n.font_get_first.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_first.ind }
        ],
        signature: '(ind)'
    },
	font_get_fontname: {
        description: '[Function]' + i18n.font_get_fontname.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_fontname.ind }
        ],
        signature: '(ind)'
    },
	font_get_italic: {
        description: '[Function]' + i18n.font_get_italic.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_italic.ind }
        ],
        signature: '(ind)'
    },
	font_get_last: {
        description: '[Function]' + i18n.font_get_last.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_last.ind }
        ],
        signature: '(ind)'
    },
	font_get_name: {
        description: '[Function]' + i18n.font_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_name.ind }
        ],
        signature: '(ind)'
    },
	font_get_size: {
        description: '[Function]' + i18n.font_get_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_size.ind }
        ],
        signature: '(ind)'
    },
	font_get_texture: {
        description: '[Function]' + i18n.font_get_texture.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_texture.ind }
        ],
        signature: '(ind)'
    },
	font_get_uvs: {
        description: '[Function]' + i18n.font_get_uvs.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_get_uvs.ind }
        ],
        signature: '(ind)'
    },
	font_replace: {
        description: '[Function]' + i18n.font_replace.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_replace.ind },
            { label: 'name', documentation: i18n.font_replace.name },
            { label: 'size', documentation: i18n.font_replace.size },
            { label: 'bold', documentation: i18n.font_replace.bold },
            { label: 'italic', documentation: i18n.font_replace.italic },
            { label: 'first', documentation: i18n.font_replace.first },
            { label: 'last', documentation: i18n.font_replace.last }
        ],
        signature: '(ind, name, size, bold, italic, first, last)'
    },
	font_replace_sprite: {
        description: '[Function]' + i18n.font_replace_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.font_replace_sprite.ind },
            { label: 'spr', documentation: i18n.font_replace_sprite.spr },
            { label: 'first', documentation: i18n.font_replace_sprite.first },
            { label: 'prop', documentation: i18n.font_replace_sprite.prop },
            { label: 'sep', documentation: i18n.font_replace_sprite.sep }
        ],
        signature: '(ind, spr, first, prop, sep)'
    },
	font_replace_sprite_ext: {
        description: '[Function]' + i18n.font_replace_sprite_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'font', documentation: i18n.font_replace_sprite_ext.font },
            { label: 'spr', documentation: i18n.font_replace_sprite_ext.spr },
            { label: 'string_map', documentation: i18n.font_replace_sprite_ext.string_map },
            { label: 'prop', documentation: i18n.font_replace_sprite_ext.prop },
            { label: 'sep', documentation: i18n.font_replace_sprite_ext.sep }
        ],
        signature: '(font, spr, string_map, prop, sep)'
    },
	font_set_cache_size: {
        description: '[Function]' + i18n.font_set_cache_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'font', documentation: i18n.font_set_cache_size.font },
            { label: 'max', documentation: i18n.font_set_cache_size.max }
        ],
        signature: '(font, max)'
    },
	frac: {
        description: '[Function]' + i18n.frac.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.frac.x }
        ],
        signature: '(x)'
    },
	gamepad_axis_count: {
        description: '[Function]' + i18n.gamepad_axis_count.desc,
        available: datasimple.all,
        parameters: [
            { label: 'axis', documentation: i18n.gamepad_axis_count.axis }
        ],
        signature: '(axis)'
    },
	gamepad_axis_value: {
        description: '[Function]' + i18n.gamepad_axis_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_axis_value.device },
            { label: 'axisIndex', documentation: i18n.gamepad_axis_value.axisIndex }
        ],
        signature: '(device, axisIndex)'
    },
	gamepad_button_check: {
        description: '[Function]' + i18n.gamepad_button_check.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_check.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_check.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_check_pressed: {
        description: '[Function]' + i18n.gamepad_button_check_pressed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_check_pressed.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_check_pressed.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_check_released: {
        description: '[Function]' + i18n.gamepad_button_check_released.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_check_released.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_check_released.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_button_count: {
        description: '[Function]' + i18n.gamepad_button_count.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_count.device }
        ],
        signature: '(device)'
    },
	gamepad_button_value: {
        description: '[Function]' + i18n.gamepad_button_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_button_value.device },
            { label: 'buttonIndex', documentation: i18n.gamepad_button_value.buttonIndex }
        ],
        signature: '(device, buttonIndex)'
    },
	gamepad_get_axis_deadzone: {
        description: '[Function]' + i18n.gamepad_get_axis_deadzone.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_get_axis_deadzone.device }
        ],
        signature: '(device)'
    },
	gamepad_get_button_threshold: {
        description: '[Function]' + i18n.gamepad_get_button_threshold.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_get_button_threshold.device }
        ],
        signature: '(device)'
    },
	gamepad_get_description: {
        description: '[Function]' + i18n.gamepad_get_description.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_get_description.device }
        ],
        signature: '(device)'
    },
	gamepad_get_device_count: {
        description: '[Function]' + i18n.gamepad_get_device_count.desc,
        available: datasimple.all
    },
	gamepad_is_connected: {
        description: '[Function]' + i18n.gamepad_is_connected.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_is_connected.device }
        ],
        signature: '(device)'
    },
	gamepad_is_supported: {
        description: '[Function]' + i18n.gamepad_is_supported.desc,
        available: datasimple.all
    },
	gamepad_set_axis_deadzone: {
        description: '[Function]' + i18n.gamepad_set_axis_deadzone.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_set_axis_deadzone.device },
            { label: 'deadzone', documentation: i18n.gamepad_set_axis_deadzone.deadzone }
        ],
        signature: '(device, deadzone)'
    },
	gamepad_set_button_threshold: {
        description: '[Function]' + i18n.gamepad_set_button_threshold.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_set_button_threshold.device },
            { label: 'threshold', documentation: i18n.gamepad_set_button_threshold.threshold }
        ],
        signature: '(device, threshold)'
    },
	gamepad_set_color: {
        description: '[Function]' + i18n.gamepad_set_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'index', documentation: i18n.gamepad_set_color.index },
            { label: 'color', documentation: i18n.gamepad_set_color.color }
        ],
        signature: '(index, color)'
    },
	gamepad_set_colour: {
        description: '[Function]' + i18n.gamepad_set_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'index', documentation: i18n.gamepad_set_colour.index },
            { label: 'colour', documentation: i18n.gamepad_set_colour.colour }
        ],
        signature: '(index, colour)'
    },
	gamepad_set_vibration: {
        description: '[Function]' + i18n.gamepad_set_vibration.desc,
        available: datasimple.all,
        parameters: [
            { label: 'device', documentation: i18n.gamepad_set_vibration.device },
            { label: 'leftMotorSpeed', documentation: i18n.gamepad_set_vibration.leftMotorSpeed },
            { label: 'rightMotorSpeed', documentation: i18n.gamepad_set_vibration.rightMotorSpeed }
        ],
        signature: '(device, leftMotorSpeed, rightMotorSpeed)'
    },
	game_end: {
        description: '[Function]' + i18n.game_end.desc,
        available: datasimple.all
    },
	game_load: {
        description: '[Function]' + i18n.game_load.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filename', documentation: i18n.game_load.filename }
        ],
        signature: '(filename)'
    },
	game_load_buffer: {
        description: '[Function]' + i18n.game_load_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'buffer', documentation: i18n.game_load_buffer.buffer }
        ],
        signature: '(buffer)'
    },
	game_restart: {
        description: '[Function]' + i18n.game_restart.desc,
        available: datasimple.all
    },
	game_save: {
        description: '[Function]' + i18n.game_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filename', documentation: i18n.game_save.filename }
        ],
        signature: '(filename)'
    },
	game_save_buffer: {
        description: '[Function]' + i18n.game_save_buffer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'buffer', documentation: i18n.game_save_buffer.buffer }
        ],
        signature: '(buffer)'
    },
	get_integer: {
        description: '[Function]' + i18n.get_integer.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.get_integer.str },
            { label: 'def', documentation: i18n.get_integer.def }
        ],
        signature: '(str, def)'
    },
	get_integer_async: {
        description: '[Function]' + i18n.get_integer_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.get_integer_async.str },
            { label: 'def', documentation: i18n.get_integer_async.def }
        ],
        signature: '(str, def)'
    },
	get_login_async: {
        description: '[Function]' + i18n.get_login_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'username', documentation: i18n.get_login_async.username },
            { label: 'password', documentation: i18n.get_login_async.password }
        ],
        signature: '(username, password)'
    },
	get_open_filename: {
        description: '[Function]' + i18n.get_open_filename.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_open_filename.filter },
            { label: 'fname', documentation: i18n.get_open_filename.fname }
        ],
        signature: '(filter, fname)'
    },
	get_open_filename_ext: {
        description: '[Function]' + i18n.get_open_filename_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_open_filename_ext.filter },
            { label: 'fname', documentation: i18n.get_open_filename_ext.fname },
            { label: 'dir', documentation: i18n.get_open_filename_ext.dir },
            { label: 'title', documentation: i18n.get_open_filename_ext.title }
        ],
        signature: '(filter, fname, dir, title)'
    },
	get_save_filename: {
        description: '[Function]' + i18n.get_save_filename.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_save_filename.filter },
            { label: 'fname', documentation: i18n.get_save_filename.fname }
        ],
        signature: '(filter, fname)'
    },
	get_save_filename_ext: {
        description: '[Function]' + i18n.get_save_filename_ext.desc,
        available: datasimple.all,
        parameters: [
            { label: 'filter', documentation: i18n.get_save_filename_ext.filter },
            { label: 'fname', documentation: i18n.get_save_filename_ext.fname },
            { label: 'dir', documentation: i18n.get_save_filename_ext.dir },
            { label: 'title', documentation: i18n.get_save_filename_ext.title }
        ],
        signature: '(filter, fname, dir, title)'
    },
	get_string: {
        description: '[Function]' + i18n.get_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.get_string.str },
            { label: 'def', documentation: i18n.get_string.def }
        ],
        signature: '(str, def)'
    },
	get_string_async: {
        description: '[Function]' + i18n.get_string_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.get_string_async.str },
            { label: 'def', documentation: i18n.get_string_async.def }
        ],
        signature: '(str, def)'
    },
	get_timer: {
        description: '[Function]' + i18n.get_timer.desc,
        available: datasimple.all
    },
	gml_pragma: {
        description: '[Function]' + i18n.gml_pragma.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'setting', documentation: i18n.gml_pragma.setting },
            { label: '....', documentation: i18n.gml_pragma.more }
        ],
        signature: '(setting, ....)'
    },
	gml_release_mode: {
        description: '[Function]' + i18n.gml_release_mode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.gml_release_mode.enable }
        ],
        signature: '(enable)'
    },
	highscore_add: {
        description: '[Function]' + i18n.highscore_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.highscore_add.str },
            { label: 'numb', documentation: i18n.highscore_add.numb }
        ],
        signature: '(str, numb)'
    },
	highscore_clear: {
        description: '[Function]' + i18n.highscore_clear.desc,
        available: datasimple.all
    },
	highscore_name: {
        description: '[Function]' + i18n.highscore_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'place', documentation: i18n.highscore_name.place }
        ],
        signature: '(place)'
    },
	highscore_value: {
        description: '[Function]' + i18n.highscore_value.desc,
        available: datasimple.all,
        parameters: [
            { label: 'place', documentation: i18n.highscore_value.place }
        ],
        signature: '(place)'
    },
	http_get: {
        description: '[Function]' + i18n.http_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_get.url }
        ],
        signature: '(url)'
    },
	http_get_file: {
        description: '[Function]' + i18n.http_get_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_get_file.url },
            { label: 'dest', documentation: i18n.http_get_file.dest }
        ],
        signature: '(url, dest)'
    },
	http_post_string: {
        description: '[Function]' + i18n.http_post_string.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_post_string.url },
            { label: 'string', documentation: i18n.http_post_string.string }
        ],
        signature: '(url, string)'
    },
	http_request: {
        description: '[Function]' + i18n.http_request.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.http_request.url },
            { label: 'method', documentation: i18n.http_request.method },
            { label: 'header_map', documentation: i18n.http_request.header_map },
            { label: 'body', documentation: i18n.http_request.body }
        ],
        signature: '(url, method, header_map, body)'
    },
	iap_acquire: {
        description: '[Function]' + i18n.iap_acquire.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_acquire.product_id },
            { label: 'payload', documentation: i18n.iap_acquire.payload }
        ],
        signature: '(product_id, payload)'
    },
	iap_activate: {
        description: '[Function]' + i18n.iap_activate.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list', documentation: i18n.iap_activate.ds_list }
        ],
        signature: '(ds_list)'
    },
	iap_consume: {
        description: '[Function]' + i18n.iap_consume.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_consume.product_id }
        ],
        signature: '(product_id)'
    },
	iap_enumerate_products: {
        description: '[Function]' + i18n.iap_enumerate_products.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_list', documentation: i18n.iap_enumerate_products.ds_list }
        ],
        signature: '(ds_list)'
    },
	iap_is_purchased: {
        description: '[Function]' + i18n.iap_is_purchased.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_is_purchased.product_id }
        ],
        signature: '(product_id)'
    },
	iap_product_details: {
        description: '[Function]' + i18n.iap_product_details.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_product_details.product_id },
            { label: 'ds_map', documentation: i18n.iap_product_details.ds_map }
        ],
        signature: '(product_id, ds_map)'
    },
	iap_purchase_details: {
        description: '[Function]' + i18n.iap_purchase_details.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'product_id', documentation: i18n.iap_purchase_details.product_id },
            { label: 'ds_map', documentation: i18n.iap_purchase_details.ds_map }
        ],
        signature: '(product_id, ds_map)'
    },
	iap_restore_all: {
        description: '[Function]' + i18n.iap_restore_all.desc,
        available: datasimple.gms1
    },
	iap_status: {
        description: '[Function]' + i18n.iap_status.desc,
        available: datasimple.gms1
    },
	ini_close: {
        description: '[Function]' + i18n.ini_close.desc,
        available: datasimple.all
    },
	ini_key_delete: {
        description: '[Function]' + i18n.ini_key_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_key_delete.section },
            { label: 'key', documentation: i18n.ini_key_delete.key }
        ],
        signature: '(section, key)'
    },
	ini_key_exists: {
        description: '[Function]' + i18n.ini_key_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_key_exists.section },
            { label: 'key', documentation: i18n.ini_key_exists.key }
        ],
        signature: '(section, key)'
    },
	ini_open: {
        description: '[Function]' + i18n.ini_open.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.ini_open.fname }
        ],
        signature: '(fname)'
    },
	ini_open_from_string: {
        description: '[Function]' + i18n.ini_open_from_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'content', documentation: i18n.ini_open_from_string.content }
        ],
        signature: '(content)'
    },
	ini_read_real: {
        description: '[Function]' + i18n.ini_read_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_read_real.section },
            { label: 'key', documentation: i18n.ini_read_real.key },
            { label: 'default', documentation: i18n.ini_read_real.default }
        ],
        signature: '(section, key, default)'
    },
	ini_read_string: {
        description: '[Function]' + i18n.ini_read_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_read_string.section },
            { label: 'key', documentation: i18n.ini_read_string.key },
            { label: 'default', documentation: i18n.ini_read_string.default }
        ],
        signature: '(section, key, default)'
    },
	ini_section_delete: {
        description: '[Function]' + i18n.ini_section_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_section_delete.section }
        ],
        signature: '(section)'
    },
	ini_section_exists: {
        description: '[Function]' + i18n.ini_section_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_section_exists.section }
        ],
        signature: '(section)'
    },
	ini_write_real: {
        description: '[Function]' + i18n.ini_write_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_write_real.section },
            { label: 'key', documentation: i18n.ini_write_real.key },
            { label: 'value', documentation: i18n.ini_write_real.value }
        ],
        signature: '(section, key, value)'
    },
	ini_write_string: {
        description: '[Function]' + i18n.ini_write_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'section', documentation: i18n.ini_write_stringsection },
            { label: 'key', documentation: i18n.ini_write_string.key },
            { label: 'str', documentation: i18n.ini_write_string.str }
        ],
        signature: '(section, key, str)'
    },
	instance_activate_all: {
        description: '[Function]' + i18n.instance_activate_all.desc,
        available: datasimple.all
    },
	instance_activate_object: {
        description: '[Function]' + i18n.instance_activate_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_activate_object.obj }
        ],
        signature: '(obj)'
    },
	instance_activate_region: {
        description: '[Function]' + i18n.instance_activate_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'left', documentation: i18n.instance_activate_region.left },
            { label: 'top', documentation: i18n.instance_activate_region.top },
            { label: 'width', documentation: i18n.instance_activate_region.width },
            { label: 'height', documentation: i18n.instance_activate_region.height },
            { label: 'inside', documentation: i18n.instance_activate_region.inside }
        ],
        signature: '(left, top, width, height, inside)'
    },
	instance_change: {
        description: '[Function]' + i18n.instance_change.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_change.obj },
            { label: 'performevents', documentation: i18n.instance_change.performevents }
        ],
        signature: '(obj, performevents)'
    },
	instance_copy: {
        description: '[Function]' + i18n.instance_copy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'performevents', documentation: i18n.instance_copy.performevents }
        ],
        signature: '(performevent)'
    },
	instance_create: {
        description: '[Function]' + i18n.instance_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_create.x },
            { label: 'y', documentation: i18n.instance_create.y },
            { label: 'obj', documentation: i18n.instance_create.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_deactivate_all: {
        description: '[Function]' + i18n.instance_deactivate_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'notme', documentation: i18n.instance_deactivate_all.notme }
        ],
        signature: '(notme)'
    },
	instance_deactivate_object: {
        description: '[Function]' + i18n.instance_deactivate_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_deactivate_object.obj }
        ],
        signature: '(obj)'
    },
	instance_deactivate_region: {
        description: '[Function]' + i18n.instance_deactivate_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'left', documentation: i18n.instance_deactivate_region.left },
            { label: 'top', documentation: i18n.instance_deactivate_region.top },
            { label: 'width', documentation: i18n.instance_deactivate_region.width },
            { label: 'height', documentation: i18n.instance_deactivate_region.height },
            { label: 'inside', documentation: i18n.instance_deactivate_region.inside },
            { label: 'notme', documentation: i18n.instance_deactivate_region.notme }
        ],
        signature: '(left, top, width, height, inside, notme)'
    },
	instance_destroy: {
        description: '[Function]' + i18n.instance_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.instance_destroy.id },
            { label: 'execute_event_flag', documentation: i18n.instance_destroy.execute_event_flag }
        ],
        signature: '(id, execute_event_flag)'
    },
	instance_exists: {
        description: '[Function]' + i18n.instance_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_exists.obj }
        ],
        signature: '(obj)'
    },
	instance_find: {
        description: '[Function]' + i18n.instance_find.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_find.obj },
            { label: 'n', documentation: i18n.instance_find.n }
        ],
        signature: '(obj, n)'
    },
	instance_furthest: {
        description: '[Function]' + i18n.instance_furthest.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_furthest.x },
            { label: 'y', documentation: i18n.instance_furthest.y },
            { label: 'obj', documentation: i18n.instance_furthest.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_nearest: {
        description: '[Function]' + i18n.instance_nearest.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_nearest.x },
            { label: 'y', documentation: i18n.instance_nearest.y },
            { label: 'obj', documentation: i18n.instance_nearest.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_number: {
        description: '[Function]' + i18n.instance_number.desc,
        available: datasimple.all,
        parameters: [
            { label: 'obj', documentation: i18n.instance_number.obj }
        ],
        signature: '(obj)'
    },
	instance_place: {
        description: '[Function]' + i18n.instance_place.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_place.x },
            { label: 'y', documentation: i18n.instance_place.y },
            { label: 'obj', documentation: i18n.instance_place.obj }
        ],
        signature: '(x, y, obj)'
    },
	instance_position: {
        description: '[Function]' + i18n.instance_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.instance_position.x },
            { label: 'y', documentation: i18n.instance_position.y },
            { label: 'obj', documentation: i18n.instance_position.obj }
        ],
        signature: '(x, y, obj)'
    },
	int64: {
        description: '[Function]' + i18n.int64.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.int64.val }
        ],
        signature: '(val)'
    },
	io_clear: {
        description: '[Function]' + i18n.io_clear.desc,
        available: datasimple.all
    },
	irandom: {
        description: '[Function]' + i18n.irandom.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.irandom.x }
        ],
        signature: '(x)'
    },
	irandom_old: {
        description: '[Function]' + i18n.irandom_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.irandom_old.x }
        ],
        signature: '(x)'
    },
	irandom_range: {
        description: '[Function]' + i18n.irandom_range.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.irandom_range.x1 },
            { label: 'x2', documentation: i18n.irandom_range.x2 }
        ],
        signature: '(x1, x2)'
    },
	irandom_range_old: {
        description: '[Function]' + i18n.irandom_range_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.irandom_range_old.x1 },
            { label: 'x2', documentation: i18n.irandom_range_old.x2 }
        ],
        signature: '(x1, x2)'
    },
	is_array: {
        description: '[Function]' + i18n.is_array.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_array.val }
        ],
        signature: '(val)'
    },
	is_bool: {
        description: '[Function]' + i18n.is_bool.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_bool.val }
        ],
        signature: '(val)'
    },
	is_int32: {
        description: '[Function]' + i18n.is_int32.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_int32.val }
        ],
        signature: '(val)'
    },
	is_int64: {
        description: '[Function]' + i18n.is_int64.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_int64.val }
        ],
        signature: '(val)'
    },
	is_matrix: {
        description: '[Function]' + i18n.is_matrix.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_matrix.val }
        ],
        signature: '(val)'
    },
	is_ptr: {
        description: '[Function]' + i18n.is_ptr.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_ptr.val }
        ],
        signature: '(val)'
    },
	is_real: {
        description: '[Function]' + i18n.is_real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_real.val }
        ],
        signature: '(val)'
    },
	is_string: {
        description: '[Function]' + i18n.is_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_string.val }
        ],
        signature: '(val)'
    },
	is_undefined: {
        description: '[Function]' + i18n.is_undefined.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_undefined.val }
        ],
        signature: '(val)'
    },
	is_vec3: {
        description: '[Function]' + i18n.is_vec3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_vec3.val }
        ],
        signature: '(val)'
    },
	is_vec4: {
        description: '[Function]' + i18n.is_vec4.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.is_vec4.val }
        ],
        signature: '(val)'
    },
	joystick_axes: {
        description: '[Function]' + i18n.joystick_axes.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_axes.id }
        ],
        signature: '(id)'
    },
	joystick_buttons: {
        description: '[Function]' + i18n.joystick_buttons.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_buttons.id }
        ],
        signature: '(id)'
    },
	joystick_check_button: {
        description: '[Function]' + i18n.joystick_check_button.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_check_button.id },
            { label: 'button', documentation: i18n.joystick_check_button.button }
        ],
        signature: '(id, button)'
    },
	joystick_direction: {
        description: '[Function]' + i18n.joystick_direction.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_direction.id }
        ],
        signature: '(id)'
    },
	joystick_exists: {
        description: '[Function]' + i18n.joystick_exists.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_exists.id }
        ],
        signature: '(id)'
    },
	joystick_has_pov: {
        description: '[Function]' + i18n.joystick_has_pov.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_has_pov.id }
        ],
        signature: '(id)'
    },
	joystick_name: {
        description: '[Function]' + i18n.joystick_name.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_name.id }
        ],
        signature: '(id)'
    },
	joystick_pov: {
        description: '[Function]' + i18n.joystick_pov.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_pov.id }
        ],
        signature: '(id)'
    },
	joystick_rpos: {
        description: '[Function]' + i18n.joystick_rpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_rpos.id }
        ],
        signature: '(id)'
    },
	joystick_upos: {
        description: '[Function]' + i18n.joystick_upos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_upos.id }
        ],
        signature: '(id)'
    },
	joystick_vpos: {
        description: '[Function]' + i18n.joystick_vpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_vpos.id }
        ],
        signature: '(id)'
    },
	joystick_xpos: {
        description: '[Function]' + i18n.joystick_xpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_xpos.id }
        ],
        signature: '(id)'
    },
	joystick_ypos: {
        description: '[Function]' + i18n.joystick_ypos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_ypos.id }
        ],
        signature: '(id)'
    },
	joystick_zpos: {
        description: '[Function]' + i18n.joystick_zpos.desc,
        parameters: [
            { label: 'id', documentation: i18n.joystick_zpos.id }
        ],
        signature: '(id)'
    },
	json_decode: {
        description: '[Function]' + i18n.json_decode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.json_decode.string }
        ],
        signature: '(string)'
    },
	json_encode: {
        description: '[Function]' + i18n.json_encode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_map', documentation: i18n.json_encode.ds_map }
        ],
        signature: '(ds_map)'
    },
	keyboard_check: {
        description: '[Function]' + i18n.keyboard_check.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check.key }
        ],
        signature: '(key)'
    },
	keyboard_check_direct: {
        description: '[Function]' + i18n.keyboard_check_direct.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check_direct.key }
        ],
        signature: '(key)'
    },
	keyboard_check_pressed: {
        description: '[Function]' + i18n.keyboard_check_pressed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check_pressed.key }
        ],
        signature: '(key)'
    },
	keyboard_check_released: {
        description: '[Function]' + i18n.keyboard_check_released.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_check_released.key }
        ],
        signature: '(key)'
    },
	keyboard_clear: {
        description: '[Function]' + i18n.keyboard_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_clear.key }
        ],
        signature: '(key)'
    },
	keyboard_get_map: {
        description: '[Function]' + i18n.keyboard_get_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_get_map.key }
        ],
        signature: '(key)'
    },
	keyboard_get_numlock: {
        description: '[Function]' + i18n.keyboard_get_numlock.desc,
        available: datasimple.all
    },
	keyboard_key_press: {
        description: '[Function]' + i18n.keyboard_key_press.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_key_press.key }
        ],
        signature: '(key)'
    },
	keyboard_key_release: {
        description: '[Function]' + i18n.keyboard_key_release.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key', documentation: i18n.keyboard_key_release.key }
        ],
        signature: '(key)'
    },
	keyboard_set_map: {
        description: '[Function]' + i18n.keyboard_set_map.desc,
        available: datasimple.all,
        parameters: [
            { label: 'key1', documentation: i18n.keyboard_set_map.key1 },
            { label: 'key2', documentation: i18n.keyboard_set_map.key2 }
        ],
        signature: '(key1, key2)'
    },
	keyboard_set_numlock: {
        description: '[Function]' + i18n.keyboard_set_numlock.desc,
        available: datasimple.all,
        parameters: [
            { label: 'bool', documentation: i18n.keyboard_set_numlock.bool }
        ],
        signature: '(bool)'
    },
	keyboard_unset_map: {
        description: '[Function]' + i18n.keyboard_unset_map.desc,
        available: datasimple.all
    },
	lengthdir_x: {
        description: '[Function]' + i18n.lengthdir_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'len', documentation: i18n.lengthdir_x.len },
            { label: 'dir', documentation: i18n.lengthdir_x.dir }
        ],
        signature: '(len, dir)'
    },
	lengthdir_y: {
        description: '[Function]' + i18n.lengthdir_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'len', documentation: i18n.lengthdir_y.len },
            { label: 'dir', documentation: i18n.lengthdir_y.dir }
        ],
        signature: '(len, dir)'
    },
	lerp: {
        description: '[Function]' + i18n.lerp.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val1', documentation: i18n.lerp.val1 },
            { label: 'val2', documentation: i18n.lerp.val2 },
            { label: 'amount', documentation: i18n.lerp.amount }
        ],
        signature: '(val1, val2, amount)'
    },
	ln: {
        description: '[Function]' + i18n.ln.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.ln.x }
        ],
        signature: '(x)'
    },
	log10: {
        description: '[Function]' + i18n.log10.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.log10.x }
        ],
        signature: '(x)'
    },
	log2: {
        description: '[Function]' + i18n.log2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.log2.x }
        ],
        signature: '(x)'
    },
	logn: {
        description: '[Function]' + i18n.logn.desc,
        available: datasimple.all,
        parameters: [
            { label: 'n', documentation: i18n.logn.n },
            { label: 'x', documentation: i18n.logn.x }
        ],
        signature: '(n, x)'
    },
	make_color_hsv: {
        description: '[Function]' + i18n.make_color_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hue', documentation: i18n.make_color_hsv.hue },
            { label: 'saturation', documentation: i18n.make_color_hsv.saturation },
            { label: 'value', documentation: i18n.make_color_hsv.value }
        ],
        signature: '(hue, saturation, value)'
    },
	make_color_rgb: {
        description: '[Function]' + i18n.make_color_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.make_color_rgb.red },
            { label: 'green', documentation: i18n.make_color_rgb.green },
            { label: 'blue', documentation: i18n.make_color_rgb.blue }
        ],
        signature: '(red, green, blue)'
    },
	make_colour_hsv: {
        description: '[Function]' + i18n.make_colour_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hue', documentation: i18n.make_colour_hsv.hue },
            { label: 'saturation', documentation: i18n.make_colour_hsv.saturation },
            { label: 'value', documentation: i18n.make_colour_hsv.value }
        ],
        signature: '(hue, saturation, value)'
    },
	make_colour_rgb: {
        description: '[Function]' + i18n.make_colour_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'red', documentation: i18n.make_colour_rgb.red },
            { label: 'green', documentation: i18n.make_colour_rgb.green },
            { label: 'blue', documentation: i18n.make_colour_rgb.blue }
        ],
        signature: '(red, green, blue)'
    },
	math_get_epsilon: {
        description: '[Function]' + i18n.math_get_epsilon.desc,
        available: datasimple.gms1
    },
	math_set_epsilon: {
        description: '[Function]' + i18n.math_set_epsilon.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'new_epsilon', documentation: i18n.math_set_epsilon.new_epsilon }
        ],
        signature: '(new_epsilon)'
    },
	matrix_build: {
        description: '[Function]' + i18n.matrix_build.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.matrix_build.x },
            { label: 'y', documentation: i18n.matrix_build.y },
            { label: 'z', documentation: i18n.matrix_build.z },
            { label: 'xrotation', documentation: i18n.matrix_build.xrotation },
            { label: 'yrotation', documentation: i18n.matrix_build.yrotation },
            { label: 'zrotation', documentation: i18n.matrix_build.zrotation },
            { label: 'xscale', documentation: i18n.matrix_build.xscale },
            { label: 'yscale', documentation: i18n.matrix_build.yscale },
            { label: 'zscale', documentation: i18n.matrix_build.zscale }
        ],
        signature: '(x, y, z, xrotation, yrotation, zrotation, xscale, yscale, zscale)'
    },
	matrix_get: {
        description: '[Function]' + i18n.matrix_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.matrix_get.type }
        ],
        signature: '(type)'
    },
	matrix_multiply: {
        description: '[Function]' + i18n.matrix_multiply.matrix.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'matrix', documentation: i18n.matrix_multiply.matrix },
            { label: 'matrix', documentation: i18n.matrix_multiply.matrix }
        ],
        signature: '(matrix, matrix)'
    },
	matrix_set: {
        description: '[Function]' + i18n.matrix_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.matrix_set.type },
            { label: 'matrix', documentation: i18n.matrix_set.matrix }
        ],
        signature: '(type, matrix)'
    },
	max: {
        description: '[Function]' + i18n.max.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.max.x1 },
            { label: 'x2', documentation: i18n.max.x2 },
            { label: 'x3', documentation: i18n.max.x3 },
            { label: '...', documentation: i18n.max.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	md5_file: {
        description: '[Function]' + i18n.md5_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fname', documentation: i18n.md5_file.fname }
        ],
        signature: '(fname)'
    },
	md5_string_unicode: {
        description: '[Function]' + i18n.md5_string_unicode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.md5_string_unicode.string }
        ],
        signature: '(string)'
    },
	md5_string_utf8: {
        description: '[Function]' + i18n.md5_string_utf8.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.md5_string_utf8.string }
        ],
        signature: '(string)'
    },
	mean: {
        description: '[Function]' + i18n.mean.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.mean.x1 },
            { label: 'x2', documentation: i18n.mean.x2 },
            { label: 'x3', documentation: i18n.mean.x3 },
            { label: '...', documentation: i18n.mean.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	median: {
        description: '[Function]' + i18n.median.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.median.x1 },
            { label: 'x2', documentation: i18n.median.x2 },
            { label: 'x3', documentation: i18n.median.x3 },
            { label: '...', documentation: i18n.median.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	merge_color: {
        description: '[Function]' + i18n.merge_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'col1', documentation: i18n.merge_color.col1 },
            { label: 'col2', documentation: i18n.merge_color.col2 },
            { label: 'amount', documentation: i18n.merge_color.amount }
        ],
        signature: '(col1, col2, amount)'
    },
	min: {
        description: '[Function]' + i18n.min.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.min.x1 },
            { label: 'x2', documentation: i18n.min.x2 },
            { label: 'x3', documentation: i18n.min.x3 },
            { label: '...', documentation: i18n.min.more }
        ],
        signature: '(x1, x2, x3, ...)'
    },
	motion_add: {
        description: '[Function]' + i18n.motion_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.motion_add.dir },
            { label: 'speed', documentation: i18n.motion_add.speed }
        ],
        signature: '(dir, speed)'
    },
	motion_set: {
        description: '[Function]' + i18n.motion_set.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.motion_set.dir },
            { label: 'speed', documentation: i18n.motion_set.speed }
        ],
        signature: '(dir, speed)'
    },
	mouse_check_button: {
        description: '[Function]' + i18n.mouse_check_button.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_check_button.button }
        ],
        signature: '(button)'
    },
	mouse_check_button_pressed: {
        description: '[Function]' + i18n.mouse_check_button_pressed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_check_button_pressed.button }
        ],
        signature: '(button)'
    },
	mouse_check_button_released: {
        description: '[Function]' + i18n.mouse_check_button_released.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_check_button_released.button }
        ],
        signature: '(button)'
    },
	mouse_clear: {
        description: '[Function]' + i18n.mouse_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'button', documentation: i18n.mouse_clear.button }
        ],
        signature: '(button)'
    },
	mouse_wheel_down: {
        description: '[Function]' + i18n.mouse_wheel_down.desc,
        available: datasimple.all
    },
	mouse_wheel_up: {
        description: '[Function]' + i18n.mouse_wheel_up.desc,
        available: datasimple.all
    },
	move_bounce_all: {
        description: '[Function]' + i18n.move_bounce_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'advanced', documentation: i18n.move_bounce_all.advanced }
        ],
        signature: '(advanced)'
    },
	move_bounce_solid: {
        description: '[Function]' + i18n.move_bounce_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'advanced', documentation: i18n.move_bounce_solid.advanced }
        ],
        signature: '(advanced)'
    },
	move_contact_all: {
        description: '[Function]' + i18n.move_contact_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_contact_all.dir },
            { label: 'maxdist', documentation: i18n.move_contact_all.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_contact_solid: {
        description: '[Function]' + i18n.move_contact_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_contact_solid.dir },
            { label: 'maxdist', documentation: i18n.move_contact_solid.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_outside_all: {
        description: '[Function]' + i18n.move_contact_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_contact_solid.dir },
            { label: 'maxdist', documentation: i18n.move_contact_solid.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_outside_solid: {
        description: '[Function]' + i18n.move_outside_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'dir', documentation: i18n.move_outside_solid.dir },
            { label: 'maxdist', documentation: i18n.move_outside_solid.maxdist }
        ],
        signature: '(dir, maxdist)'
    },
	move_random: {
        description: '[Function]' + i18n.move_random.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hsnap', documentation: i18n.move_random.hsnap },
            { label: 'vsnap', documentation: i18n.move_random.vsnap }
        ],
        signature: '(hsnap, vsnap)'
    },
	move_snap: {
        description: '[Function]' + i18n.move_snap.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hsnap', documentation: i18n.move_snap.hsnap },
            { label: 'vsnap', documentation: i18n.move_snap.vsnap }
        ],
        signature: '(hsnap, vsnap)'
    },
	move_towards_point: {
        description: '[Function]' + i18n.move_towards_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.move_towards_point.x },
            { label: 'y', documentation: i18n.move_towards_point.y },
            { label: 'sp', documentation: i18n.move_towards_point.sp }
        ],
        signature: '(x, y, sp)'
    },
	move_wrap: {
        description: '[Function]' + i18n.move_wrap.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hor', documentation: i18n.move_wrap.hor },
            { label: 'vert', documentation: i18n.move_wrap.vert },
            { label: 'margin', documentation: i18n.move_wrap.margin }
        ],
        signature: '(hor, vert, margin)'
    },
	mp_grid_add_cell: {
        description: '[Function]' + i18n.mp_grid_add_cell.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_add_cell.id },
            { label: 'h', documentation: i18n.mp_grid_add_cell.h },
            { label: 'v', documentation: i18n.mp_grid_add_cell.v }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_add_instances: {
        description: '[Function]' + i18n.mp_grid_add_instances.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_add_instances.id },
            { label: 'obj', documentation: i18n.mp_grid_add_instances.obj },
            { label: 'prec', documentation: i18n.mp_grid_add_instances.prec }
        ],
        signature: '(id, obj, prec)'
    },
	mp_grid_add_rectangle: {
        description: '[Function]' + i18n.mp_grid_add_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_add_rectangle.id },
            { label: 'left', documentation: i18n.mp_grid_add_rectangle.left },
            { label: 'top', documentation: i18n.mp_grid_add_rectangle.top },
            { label: 'right', documentation: i18n.mp_grid_add_rectangle.right },
            { label: 'bottom', documentation: i18n.mp_grid_add_rectangle.bottom }
        ],
        signature: '(id, left, top, right, bottom)'
    },
	mp_grid_clear_all: {
        description: '[Function]' + i18n.mp_grid_clear_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_clear_all.id }
        ],
        signature: '(id)'
    },
	mp_grid_clear_cell: {
        description: '[Function]' + i18n.mp_grid_clear_cell.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_clear_cell.id },
            { label: 'h', documentation: i18n.mp_grid_clear_cell.h },
            { label: 'v', documentation: i18n.mp_grid_clear_cell.v }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_clear_rectangle: {
        description: '[Function]' + i18n.mp_grid_clear_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_clear_rectangle.id },
            { label: 'left', documentation: i18n.mp_grid_clear_rectangle.left },
            { label: 'top', documentation: i18n.mp_grid_clear_rectangle.top },
            { label: 'right', documentation: i18n.mp_grid_clear_rectangle.right },
            { label: 'bottom', documentation: i18n.mp_grid_clear_rectangle.bottom }
        ],
        signature: '(id, left, top, right, bottom)'
    },
	mp_grid_create: {
        description: '[Function]' + i18n.mp_grid_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'left', documentation: i18n.mp_grid_create.left },
            { label: 'top', documentation: i18n.mp_grid_create.top },
            { label: 'hcells', documentation: i18n.mp_grid_create.heclls },
            { label: 'vcells', documentation: i18n.mp_grid_create.vcells },
            { label: 'cellwidth', documentation: i18n.mp_grid_create.cellwidth },
            { label: 'cellheight', documentation: i18n.mp_grid_create.cellheight }
        ],
        signature: '(left, top, hcells, vcells, cellwidth, cellheight)'
    },
	mp_grid_destroy: {
        description: '[Function]' + i18n.mp_grid_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_destroy.id }
        ],
        signature: '(id)'
    },
	mp_grid_draw: {
        description: '[Function]' + i18n.mp_grid_draw.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_draw.id }
        ],
        signature: '(id)'
    },
	mp_grid_get_cell: {
        description: '[Function]' + i18n.mp_grid_get_cell.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_get_cell.id },
            { label: 'h', documentation: i18n.mp_grid_get_cell.h },
            { label: 'v', documentation: i18n.mp_grid_get_cell.v }
        ],
        signature: '(id, h, v)'
    },
	mp_grid_path: {
        description: '[Function]' + i18n.mp_grid_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n.mp_grid_path.id },
            { label: 'path', documentation: i18n.mp_grid_path.path },
            { label: 'xstart', documentation: i18n.mp_grid_path.xstart },
            { label: 'ystart', documentation: i18n.mp_grid_path.ystart },
            { label: 'xgoal', documentation: i18n.mp_grid_path.xgoal },
            { label: 'ygoal', documentation: i18n.mp_grid_path.ygoal },
            { label: 'allowdiag', documentation: i18n.mp_grid_path.allowding }
        ],
        signature: '(id, path, xstart, ystart, xgoal, ygoal, allowdiag)'
    },
	mp_grid_to_ds_grid: {
        description: '[Function]' + i18n.mp_grid_to_ds_grid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'src', documentation: i18n.mp_grid_to_ds_grid.src },
            { label: 'dest', documentation: i18n.mp_grid_to_ds_grid.dest }
        ],
        signature: '(src, dest)'
    },
	mp_linear_path: {
        description: '[Function]' + i18n.mp_linear_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_linear_path.path },
            { label: 'xg', documentation: i18n.mp_linear_path.xg },
            { label: 'yg', documentation: i18n.mp_linear_path.yg },
            { label: 'stepsize', documentation: i18n.mp_linear_path.stepsize },
            { label: 'checkall', documentation: i18n.mp_linear_path.checkall }
        ],
        signature: '(path, xg, yg, stepsize, checkall)'
    },
	mp_linear_path_object: {
        description: '[Function]' + i18n.mp_linear_path_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_linear_path_object.path },
            { label: 'xg', documentation: i18n.mp_linear_path_object.xg },
            { label: 'yg', documentation: i18n.mp_linear_path_object.yg },
            { label: 'stepsize', documentation: i18n.mp_linear_path_object.stepsize },
            { label: 'obj', documentation: i18n.mp_linear_path_object.obj }
        ],
        signature: '(path, xg, yg, stepsize, obj)'
    },
	mp_linear_step: {
        description: '[Function]' + i18n.mp_linear_step.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_linear_step.x },
            { label: 'y', documentation: i18n.mp_linear_step.y },
            { label: 'speed', documentation: i18n.mp_linear_step.speed },
            { label: 'checkall', documentation: i18n.mp_linear_step.checkall }
        ],
        signature: '(x, y, speed, checkall)'
    },
	mp_linear_step_object: {
        description: '[Function]' + i18n.mp_linear_step_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_linear_step_object.x },
            { label: 'y', documentation: i18n.mp_linear_step_object.y },
            { label: 'speed', documentation: i18n.mp_linear_step_object.speed },
            { label: 'obj', documentation: i18n.mp_linear_step_object.obj }
        ],
        signature: '(x, y, speed, obj)'
    },
	mp_potential_path: {
        description: '[Function]' + i18n.mp_potential_path.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_potential_path.path },
            { label: 'xg', documentation: i18n.mp_potential_path.xg },
            { label: 'yg', documentation: i18n.mp_potential_path.yg },
            { label: 'stepsize', documentation: i18n.mp_potential_path.stepsize },
            { label: 'factor', documentation: i18n.mp_potential_path.factor },
            { label: 'checkall', documentation: i18n.mp_potential_path.checkall }
        ],
        signature: '(path, xg, yg, stepsize, factor, checkall)'
    },
	mp_potential_path_object: {
        description: '[Function]' + i18n.mp_potential_path_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.mp_potential_path_object.path },
            { label: 'xg', documentation: i18n.mp_potential_path_object.xg },
            { label: 'yg', documentation: i18n.mp_potential_path_object.yg },
            { label: 'stepsize', documentation: i18n.mp_potential_path_object.stepsize },
            { label: 'factor', documentation: i18n.mp_potential_path_object.factor },
            { label: 'obj', documentation: i18n.mp_potential_path_object.obj }
        ],
        signature: '(path, xg, yg, stepsize, factor, obj)'
    },
	mp_potential_settings: {
        description: '[Function]' + i18n.mp_potential_settings.desc,
        available: datasimple.all,
        parameters: [
            { label: 'maxrot', documentation: i18n.mp_potential_settings.maxrot },
            { label: 'rotstep', documentation: i18n.mp_potential_settings.rotstep },
            { label: 'ahead', documentation: i18n.mp_potential_settings.ahead },
            { label: 'onspot', documentation: i18n.mp_potential_settings.onspot }
        ],
        signature: '(maxrot, rotstep, ahead, onspot)'
    },
	mp_potential_step: {
        description: '[Function]' + i18n.mp_potential_step.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_potential_step.x },
            { label: 'y', documentation: i18n.mp_potential_step.y },
            { label: 'speed', documentation: i18n.mp_potential_step.speed },
            { label: 'checkall', documentation: i18n.mp_potential_step.checkall }
        ],
        signature: '(x, y, speed, checkall)'
    },
	mp_potential_step_object: {
        description: '[Function]' + i18n.mp_potential_step_object.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.mp_potential_step_object.x },
            { label: 'y', documentation: i18n.mp_potential_step_object.y },
            { label: 'speed', documentation: i18n.mp_potential_step_object.speed },
            { label: 'obj', documentation: i18n.mp_potential_step_object.obj }
        ],
        signature: '(x, y, speed, obj)'
    },
	network_connect: {
        description: '[Function]' + i18n.network_connect.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_connect.socket },
            { label: 'url', documentation: i18n.network_connect.url },
            { label: 'port', documentation: i18n.network_connect.port }
        ],
        signature: '(socket, url, port)'
    },
	network_connect_raw: {
        description: '[Function]' + i18n.network_connect_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_connect_raw.socket },
            { label: 'url', documentation: i18n.network_connect_raw.url },
            { label: 'port', documentation: i18n.network_connect_raw.port }
        ],
        signature: '(socket, url, port)'
    },
	network_create_server: {
        description: '[Function]' + i18n.network_create_server.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_server.type },
            { label: 'port', documentation: i18n.network_create_server.port },
            { label: 'maxclients', documentation: i18n.network_create_server.maxclients }
        ],
        signature: '(type, port, maxclients)'
    },
	network_create_server_raw: {
        description: '[Function]' + i18n.network_create_server_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_server_raw.type },
            { label: 'port', documentation: i18n.network_create_server_raw.port },
            { label: 'maxclients', documentation: i18n.network_create_server_raw.maxclients }
        ],
        signature: '(type, port, maxclients)'
    },
	network_create_socket: {
        description: '[Function]' + i18n.network_create_socket.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_socket.type }
        ],
        signature: '(type)'
    },
	network_create_socket_ext: {
        description: '[Function]' + i18n.network_create_socket_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n.network_create_socket_ext.type },
            { label: 'port', documentation: i18n.network_create_socket_ext.port }
        ],
        signature: '(type, port)'
    },
	network_destroy: {
        description: '[Function]' + i18n.network_destroy.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_destroy.socket }
        ],
        signature: '(socket)'
    },
	network_resolve: {
        description: '[Function]' + i18n.network_resolve.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n.network_resolve.url }
        ],
        signature: '(url)'
    },
	network_send_broadcast: {
        description: '[Function]' + i18n.network_send_broadcast.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_broadcast.socket },
            { label: 'port', documentation: i18n.network_send_broadcast.port },
            { label: 'bufferid', documentation: i18n.network_send_broadcast.bufferid },
            { label: 'size', documentation: i18n.network_send_broadcast.size }
        ],
        signature: '(socket, port, bufferid, size)'
    },
	network_send_packet: {
        description: '[Function]' + i18n.network_send_packet.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_packet.socket },
            { label: 'bufferid', documentation: i18n.network_send_packet.bufferid },
            { label: 'size', documentation: i18n.network_send_packet.size }
        ],
        signature: '(socket, bufferid, size)'
    },
	network_send_raw: {
        description: '[Function]' + i18n.network_send_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_raw.socket },
            { label: 'bufferid', documentation: i18n.network_send_raw.bufferid },
            { label: 'size', documentation: i18n.network_send_raw.size }
        ],
        signature: '(socket, buffer_id, size)'
    },
	network_send_udp: {
        description: '[Function]' + i18n.network_send_udp.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_udp.socket },
            { label: 'url', documentation: i18n.network_send_udp.url },
            { label: 'port', documentation: i18n.network_send_udp.port },
            { label: 'data', documentation: i18n.network_send_udp.data },
            { label: 'size', documentation: i18n.network_send_udp.size }
        ],
        signature: '(socket, URL, port, data, size)'
    },
	network_send_udp_raw: {
        description: '[Function]' + i18n.network_send_udp_raw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_send_udp_raw.socket },
            { label: 'url', documentation: i18n.network_send_udp_raw.url },
            { label: 'port', documentation: i18n.network_send_udp_raw.port },
            { label: 'data', documentation: i18n.network_send_udp_raw.data },
            { label: 'size', documentation: i18n.network_send_udp_raw.size }
        ],
        signature: '(socket, URL, port, data, size)'
    },
	network_set_config: {
        description: '[Function]' + i18n.network_set_config.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'parameter', documentation: i18n.network_set_config.parameter },
            { label: 'value', documentation: i18n.network_set_config.value }
        ],
        signature: '(parameter, value)'
    },
	network_set_timeout: {
        description: '[Function]' + i18n.network_set_timeout.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'socket', documentation: i18n.network_set_timeout.socket },
            { label: 'read', documentation: i18n.network_set_timeout.read },
            { label: 'write', documentation: i18n.network_set_timeout.write }
        ],
        signature: '(socket, read, write)'
    },
	object_exists: {
        description: '[Function]' + i18n.object_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_exists.ind }
        ],
        signature: '(ind)'
    },
	object_get_mask: {
        description: '[Function]' + i18n.object_get_mask.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_mask.ind }
        ],
        signature: '(ind)'
    },
	object_get_name: {
        description: '[Function]' + i18n.object_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_name.ind }
        ],
        signature: '(ind)'
    },
	object_get_parent: {
        description: '[Function]' + i18n.object_get_parent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_parent.ind }
        ],
        signature: '(ind)'
    },
	object_get_persistent: {
        description: '[Function]' + i18n.object_get_persistent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_persistent.ind }
        ],
        signature: '(ind)'
    },
	object_get_physics: {
        description: '[Function]' + i18n.object_get_physics.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_physics.ind }
        ],
        signature: '(ind)'
    },
	object_get_solid: {
        description: '[Function]' + i18n.object_get_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_solid.ind }
        ],
        signature: '(ind)'
    },
	object_get_sprite: {
        description: '[Function]' + i18n.object_get_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_sprite.ind }
        ],
        signature: '(ind)'
    },
	object_get_visible: {
        description: '[Function]' + i18n.object_get_visible.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_get_visible.ind }
        ],
        signature: '(ind)'
    },
	object_is_ancestor: {
        description: '[Function]' + i18n.object_is_ancestor.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind_child', documentation: i18n.object_is_ancestor.ind_child },
            { label: 'ind_parent', documentation: i18n.object_is_ancestor.ind_parent }
        ],
        signature: '(ind_child, ind_parent)'
    },
	object_set_mask: {
        description: '[Function]' + i18n.object_set_mask.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_mask.ind },
            { label: 'spr', documentation: i18n.object_set_mask.spr }
        ],
        signature: '(ind, spr)'
    },
	object_set_parent: {
        description: '[Function]' + i18n.object_set_parent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_parent.ind },
            { label: 'obj', documentation: i18n.object_set_parent.obj }
        ],
        signature: '(ind, obj)'
    },
	object_set_persistent: {
        description: '[Function]' + i18n.object_set_persistent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_persistent.ind },
            { label: 'pers', documentation: i18n.object_set_persistent.pers }
        ],
        signature: '(ind, pers)'
    },
	object_set_solid: {
        description: '[Function]' + i18n.object_set_solid.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_solid.ind },
            { label: 'soild', documentation: i18n.object_set_solid.soild }
        ],
        signature: '(ind, soild)'
    },
	object_set_sprite: {
        description: '[Function]' + i18n.object_set_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_sprite.ind },
            { label: 'spr', documentation: i18n.object_set_sprite.spr }
        ],
        signature: '(ind, spr)'
    },
	object_set_visible: {
        description: '[Function]' + i18n.object_set_visible.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.object_set_visible.ind },
            { label: 'vis', documentation: i18n.object_set_visible.vis }
        ],
        signature: '(ind, vis)'
    },
	ord: {
        description: '[Function]' + i18n.ord.desc,
        available: datasimple.all,
        parameters: [
            { label: 'char', documentation: i18n.ord.char }
        ],
        signature: '(char)'
    },
	os_get_config: {
        description: '[Function]' + i18n.os_get_config.desc,
        available: datasimple.gms1
    },
	os_get_info: {
        description: '[Function]' + i18n.os_get_info.desc,
        available: datasimple.gms1
    },
	os_get_language: {
        description: '[Function]' + i18n.os_get_language.desc,
        available: datasimple.gms1
    },
	os_get_region: {
        description: '[Function]' + i18n.os_get_region.desc,
        available: datasimple.gms1
    },
	os_is_network_connected: {
        description: '[Function]' + i18n.os_is_network_connected.desc,
        available: datasimple.gms1
    },
	os_is_paused: {
        description: '[Function]' + i18n.os_is_paused.desc,
        available: datasimple.gms1
    },
	os_lock_orientation: {
        description: '[Function]' + i18n.os_lock_orientation.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'flag', documentation: i18n.os_lock_orientation.flag }
        ],
        signature: '(flag)'
    },
	os_powersave_enable: {
        description: '[Function]' + i18n.os_powersave_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.os_powersave_enable.enable }
        ],
        signature: '(enable)'
    },
	parameter_count: {
        description: '[Function]' + i18n.parameter_count.desc,
        available: datasimple.all
    },
	parameter_string: {
        description: '[Function]' + i18n.parameter_string.desc,
        available: datasimple.all,
        parameters: [
            { label: 'n', documentation: i18n.parameter_string.n }
        ],
        signature: '(n)'
    },
	part_emitter_burst: {
        description: '[Function]' + i18n.part_emitter_burst.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_burst.ps },
            { label: 'ind', documentation: i18n.part_emitter_burst.ind },
            { label: 'parttype', documentation: i18n.part_emitter_burst.parttype },
            { label: 'number', documentation: i18n.part_emitter_burst.number }
        ],
        signature: '(ps, ind, parttype, number)'
    },
	part_emitter_clear: {
        description: '[Function]' + i18n.part_emitter_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_clear.ps },
            { label: 'ind', documentation: i18n.part_emitter_clear.ind }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_create: {
        description: '[Function]' + i18n.part_emitter_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_create.ps }
        ],
        signature: '(ps)'
    },
	part_emitter_destroy: {
        description: '[Function]' + i18n.part_emitter_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_destroy.ps },
            { label: 'ind', documentation: i18n.part_emitter_destroy.ind }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_destroy_all: {
        description: '[Function]' + i18n.part_emitter_destroy_all.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_destroy_all.ps }
        ],
        signature: '(ps)'
    },
	part_emitter_exists: {
        description: '[Function]' + i18n.part_emitter_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_exists.ps },
            { label: 'ind', documentation: i18n.part_emitter_exists.ind }
        ],
        signature: '(ps, ind)'
    },
	part_emitter_region: {
        description: '[Function]' + i18n.part_emitter_region.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_region.ps },
            { label: 'ind', documentation: i18n.part_emitter_region.ind },
            { label: 'xmin', documentation: i18n.part_emitter_region.xmin },
            { label: 'xmax', documentation: i18n.part_emitter_region.xmax },
            { label: 'ymin', documentation: i18n.part_emitter_region.ymin },
            { label: 'ymax', documentation: i18n.part_emitter_region.ymax },
            { label: 'shape', documentation: i18n.part_emitter_region.shape },
            { label: 'distribution', documentation: i18n.part_emitter_region.distribution }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape, distribution)'
    },
	part_emitter_stream: {
        description: '[Function]' + i18n.part_emitter_stream.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ps', documentation: i18n.part_emitter_stream.ps },
            { label: 'ind', documentation: i18n.part_emitter_stream.ind },
            { label: 'parttype', documentation: i18n.part_emitter_stream.parttype },
            { label: 'number', documentation: i18n.part_emitter_stream.number }
        ],
        signature: '(ps, ind, parttype, number)'
    },
	part_particles_clear: {
        description: '[Function]' + i18n.part_particles_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_clear.ind }
        ],
        signature: '(ind)'
    },
	part_particles_count: {
        description: '[Function]' + i18n.part_particles_count.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_count.ind }
        ],
        signature: '(ind)'
    },
	part_particles_create: {
        description: '[Function]' + i18n.part_particles_create.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_create.ind },
            { label: 'x', documentation: i18n.part_particles_create.x },
            { label: 'y', documentation: i18n.part_particles_create.y },
            { label: 'parttype', documentation: i18n.part_particles_create.parttype },
            { label: 'number', documentation: i18n.part_particles_create.number }
        ],
        signature: '(ind, x, y, parttype, number)'
    },
	part_particles_create_color: {
        description: '[Function]' + i18n.part_particles_create_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_create_color.ind },
            { label: 'x', documentation: i18n.part_particles_create_color.x },
            { label: 'y', documentation: i18n.part_particles_create_color.y },
            { label: 'parttype', documentation: i18n.part_particles_create_color.parttype },
            { label: 'colour', documentation: i18n.part_particles_create_color.colour },
            { label: 'number', documentation: i18n.part_particles_create_color.number }
        ],
        signature: '(ind, x, y, parttype, colour, number)'
    },
	part_particles_create_colour: {
        description: '[Function]' + i18n.part_particles_create_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_particles_create_colour.ind },
            { label: 'x', documentation: i18n.part_particles_create_colour.x },
            { label: 'y', documentation: i18n.part_particles_create_colour.y },
            { label: 'parttype', documentation: i18n.part_particles_create_colour.parttype },
            { label: 'colour', documentation: i18n.part_particles_create_colour.colour },
            { label: 'number', documentation: i18n.part_particles_create_colour.number }
        ],
        signature: '(ind, x, y, parttype, colour, number)'
    },
	part_system_automatic_draw: {
        description: '[Function]' + i18n.part_system_automatic_draw.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_automatic_draw.ind },
            { label: 'draw', documentation: i18n.part_system_automatic_draw.draw }
        ],
        signature: '(ind, draw)'
    },
	part_system_automatic_update: {
        description: '[Function]' + i18n.part_system_automatic_update.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_automatic_update.ind },
            { label: 'automatic', documentation: i18n.part_system_automatic_update.automatic }
        ],
        signature: '(ind, automatic)'
    },
	part_system_clear: {
        description: '[Function]' + i18n.part_system_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_clear.ind }
        ],
        signature: '(ind)'
    },
	part_system_create: {
        description: '[Function]' + i18n.part_system_create.desc,
        available: datasimple.all
    },
	part_system_depth: {
        description: '[Function]' + i18n.part_system_depth.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_depth.ind },
            { label: 'depth', documentation: i18n.part_system_depth.depth }
        ],
        signature: '(ind, depth)'
    },
	part_system_destroy: {
        description: '[Function]' + i18n.part_system_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_destroy.ind }
        ],
        signature: '(ind)'
    },
	part_system_drawit: {
        description: '[Function]' + i18n.part_system_drawit.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_drawit.ind }
        ],
        signature: '(ind)'
    },
	part_system_draw_order: {
        description: '[Function]' + i18n.part_system_draw_order.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_draw_order.ind },
            { label: 'oldtonew', documentation: i18n.part_system_draw_order.oldtonew }
        ],
        signature: '(ind, oldtonew)'
    },
	part_system_exists: {
        description: '[Function]' + i18n.part_system_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_exists.ind }
        ],
        signature: '(ind)'
    },
	part_system_position: {
        description: '[Function]' + i18n.part_system_position.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_position.ind },
            { label: 'x', documentation: i18n.part_system_position.x },
            { label: 'y', documentation: i18n.part_system_position.y }
        ],
        signature: '(ind, x, y)'
    },
	part_system_update: {
        description: '[Function]' + i18n.part_system_update.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_system_update.ind }
        ],
        signature: '(ind)'
    },
	part_type_alpha1: {
        description: '[Function]' + i18n.part_type_alpha1.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_alpha1.ind },
            { label: 'alpha1', documentation: i18n.part_type_alpha1.alpha1 }
        ],
        signature: '(ind, alpha1)'
    },
	part_type_alpha2: {
        description: '[Function]' + i18n.part_type_alpha2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_alpha2.ind },
            { label: 'alpha1', documentation: i18n.part_type_alpha2.alpha1 },
            { label: 'alpha2', documentation: i18n.part_type_alpha2.alpha2 }
        ],
        signature: '(ind, alpha1, alpha2)'
    },
	part_type_alpha3: {
        description: '[Function]' + i18n.part_type_alpha3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_alpha3.ind },
            { label: 'alpha1', documentation: i18n.part_type_alpha3.alpha1 },
            { label: 'alpha2', documentation: i18n.part_type_alpha3.alpha2 },
            { label: 'alpha3', documentation: i18n.part_type_alpha3.alpha3 }
        ],
        signature: '(ind, alpha1, alpha2, alpha3)'
    },
	part_type_blend: {
        description: '[Function]' + i18n.part_type_blend.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_blend.ind },
            { label: 'additive', documentation: i18n.part_type_blend.additive }
        ],
        signature: '(ind, additive)'
    },
	part_type_clear: {
        description: '[Function]' + i18n.part_type_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_clear.ind }
        ],
        signature: '(ind)'
    },
	part_type_color1: {
        description: '[Function]' + i18n.part_type_color1.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color1.ind },
            { label: 'color1', documentation: i18n.part_type_color1.color1 }
        ],
        signature: '(ind, color1)'
    },
	part_type_color2: {
        description: '[Function]' + i18n.part_type_color2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color2.ind },
            { label: 'color1', documentation: i18n.part_type_color2.color1 },
            { label: 'color2', documentation: i18n.part_type_color2.color2 }
        ],
        signature: '(ind, color1， color2)'
    },
	part_type_color3: {
        description: '[Function]' + i18n.part_type_color3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color3.ind },
            { label: 'color1', documentation: i18n.part_type_color3.color1 },
            { label: 'color2', documentation: i18n.part_type_color3.color2 },
            { label: 'color3', documentation: i18n.part_type_color3.color3 }
        ],
        signature: '(ind, color1, color2, color3)'
    },
	part_type_color_hsv: {
        description: '[Function]' + i18n.part_type_color_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color_hsv.ind },
            { label: 'hmin', documentation: i18n.part_type_color_hsv.hmin },
            { label: 'hmax', documentation: i18n.part_type_color_hsv.hmax },
            { label: 'smin', documentation: i18n.part_type_color_hsv.smin },
            { label: 'smax', documentation: i18n.part_type_color_hsv.smax },
            { label: 'vmin', documentation: i18n.part_type_color_hsv.vmin },
            { label: 'vmax', documentation: i18n.part_type_color_hsv.vmax }
        ],
        signature: '(ind, hmin, hmax, smin, smax, vmin, vmax)'
    },
	part_type_color_mix: {
        description: '[Function]' + i18n.part_type_color_mix.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color_mix.ind },
            { label: 'color1', documentation: i18n.part_type_color_mix.color1 },
            { label: 'color2', documentation: i18n.part_type_color_mix.color2 }
        ],
        signature: '(ind, color1, color2)'
    },
	part_type_color_rgb: {
        description: '[Function]' + i18n.part_type_color_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_color_rgb.ind },
            { label: 'rmin', documentation: i18n.part_type_color_rgb.rmin },
            { label: 'rmax', documentation: i18n.part_type_color_rgb.rmax },
            { label: 'gmin', documentation: i18n.part_type_color_rgb.gmin },
            { label: 'gmax', documentation: i18n.part_type_color_rgb.gmax },
            { label: 'bmin', documentation: i18n.part_type_color_rgb.bmin },
            { label: 'bmax', documentation: i18n.part_type_color_rgb.bmax }
        ],
        signature: '(ind, rmin, rmax, gmin, gmax, bmin, bmax)'
    },
	part_type_colour1: {
        description: '[Function]' + i18n.part_type_colour1.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour1.ind },
            { label: 'colour1', documentation: i18n.part_type_colour1.colour1 }
        ],
        signature: '(ind, colour1)'
    },
	part_type_colour2: {
        description: '[Function]' + i18n.part_type_colour2.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour2.ind },
            { label: 'colour1', documentation: i18n.part_type_colour2.colour1 },
            { label: 'colour2', documentation: i18n.part_type_colour2.colour2 }
        ],
        signature: '(ind, colour1, colour2)'
    },
	part_type_colour3: {
        description: '[Function]' + i18n.part_type_colour3.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour3.ind },
            { label: 'colour1', documentation: i18n.part_type_colour3.colour1 },
            { label: 'colour2', documentation: i18n.part_type_colour3.colour2 },
            { label: 'colour3', documentation: i18n.part_type_colour3.colour3 }
        ],
        signature: '(ind, colour1, colour2, colour3)'
    },
	part_type_colour_hsv: {
        description: '[Function]' + i18n.part_type_colour_hsv.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour_hsv.ind },
            { label: 'hmin', documentation: i18n.part_type_colour_hsv.hmin },
            { label: 'hmax', documentation: i18n.part_type_colour_hsv.hmax },
            { label: 'smin', documentation: i18n.part_type_colour_hsv.smin },
            { label: 'smax', documentation: i18n.part_type_colour_hsv.smax },
            { label: 'vmin', documentation: i18n.part_type_colour_hsv.vmin },
            { label: 'vmax', documentation: i18n.part_type_colour_hsv.vmax }
        ],
        signature: '(ind, hmin, hmax, smin, smax, vmin, vmax)'
    },
	part_type_colour_mix: {
        description: '[Function]' + i18n.part_type_colour_mix.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour_mix.ind },
            { label: 'colour1', documentation: i18n.part_type_colour_mix.colour1 },
            { label: 'colour2', documentation: i18n.part_type_colour_mix.colour2 }
        ],
        signature: '(ind, colour1, colour2)'
    },
	part_type_colour_rgb: {
        description: '[Function]' + i18n.part_type_colour_rgb.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_colour_rgb.ind },
            { label: 'rmin', documentation: i18n.part_type_colour_rgb.rmin },
            { label: 'rmax', documentation: i18n.part_type_colour_rgb.rmax },
            { label: 'gmin', documentation: i18n.part_type_colour_rgb.gmin },
            { label: 'gmax', documentation: i18n.part_type_colour_rgb.gmax },
            { label: 'bmin', documentation: i18n.part_type_colour_rgb.bmin },
            { label: 'bmax', documentation: i18n.part_type_colour_rgb.bmax }
        ],
        signature: '(ind, rmin, rmax, gmin, gmax, bmin, bmax)'
    },
	part_type_create: {
        description: '[Function]' + i18n.part_type_create.desc,
        available: datasimple.all
    },
	part_type_death: {
        description: '[Function]' + i18n.part_type_death.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_death.ind },
            { label: 'death_number', documentation: i18n.part_type_death.death_number },
            { label: 'death_type', documentation: i18n.part_type_death.death_type }
        ],
        signature: '(ind, death_number, death_type)'
    },
	part_type_destroy: {
        description: '[Function]' + i18n.part_type_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_destroy.ind }
        ],
        signature: '(ind)'
    },
	part_type_direction: {
        description: '[Function]' + i18n.part_type_direction.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_direction.ind },
            { label: 'dir_min', documentation: i18n.part_type_direction.dir_min },
            { label: 'dir_max', documentation: i18n.part_type_direction.dir_max },
            { label: 'dir_incr', documentation: i18n.part_type_direction.dir_incr },
            { label: 'dir_wiggle', documentation: i18n.part_type_direction.dir_wiggle }
        ],
        signature: '(ind, dir_min, dir_max, dir_incr, dir_wiggle)'
    },
	part_type_exists: {
        description: '[Function]' + i18n.part_type_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_exists.ind }
        ],
        signature: '(ind)'
    },
	part_type_gravity: {
        description: '[Function]' + i18n.part_type_gravity.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_gravity.ind },
            { label: 'grav_amount', documentation: i18n.part_type_gravity.grav_amount },
            { label: 'grav_dir', documentation: i18n.part_type_gravity.grav_dir }
        ],
        signature: '(ind, grav_amount, grav_dir)'
    },
	part_type_life: {
        description: '[Function]' + i18n.part_type_life.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_life.ind },
            { label: 'life_min', documentation: i18n.part_type_life.life_min },
            { label: 'life_max', documentation: i18n.part_type_life.life_max }
        ],
        signature: '(ind, life_min, life_max)'
    },
	part_type_orientation: {
        description: '[Function]' + i18n.part_type_orientation.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_orientation.ind },
            { label: 'ang_min', documentation: i18n.part_type_orientation.ang_min },
            { label: 'ang_max', documentation: i18n.part_type_orientation.ang_max },
            { label: 'ang_incr', documentation: i18n.part_type_orientation.ang_incr },
            { label: 'ang_wiggle', documentation: i18n.part_type_orientation.ang_wiggle },
            { label: 'ang_relative', documentation: i18n.part_type_orientation.ang_relative }
        ],
        signature: '(ind, ang_min, ang_max, ang_incr, ang_wiggle, ang_relative)'
    },
	part_type_scale: {
        description: '[Function]' + i18n.part_type_scale.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_scale.ind },
            { label: 'xscale', documentation: i18n.part_type_scale.xscale },
            { label: 'yscale', documentation: i18n.part_type_scale.yscale }
        ],
        signature: '(ind, xscale, yscale)'
    },
	part_type_shape: {
        description: '[Function]' + i18n.part_type_shape.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_shape.ind },
            { label: 'shape', documentation: i18n.part_type_shape.shape }
        ],
        signature: '(ind, shape)'
    },
	part_type_size: {
        description: '[Function]' + i18n.part_type_size.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_size.ind },
            { label: 'size_min', documentation: i18n.part_type_size.size_min },
            { label: 'size_max', documentation: i18n.part_type_size.size_max },
            { label: 'size_incr', documentation: i18n.part_type_size.size_incr },
            { label: 'size_wiggle', documentation: i18n.part_type_size.size_wiggle }
        ],
        signature: '(ind, size_min, size_max, size_incr, size_wiggle)'
    },
	part_type_speed: {
        description: '[Function]' + i18n.part_type_speed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_speed.ind },
            { label: 'speed_min', documentation: i18n.part_type_speed.speed_min },
            { label: 'speed_max', documentation: i18n.part_type_speed.speed_max },
            { label: 'speed_incr', documentation: i18n.part_type_speed.speed_incr },
            { label: 'speed_wiggle', documentation: i18n.part_type_speed.speed_wiggle }
        ],
        signature: '(ind, speed_min, speed_max, speed_incr, speed_wiggle)'
    },
	part_type_sprite: {
        description: '[Function]' + i18n.part_type_sprite.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_sprite.ind },
            { label: 'sprite', documentation: i18n.part_type_sprite.sprite },
            { label: 'animat', documentation: i18n.part_type_sprite.animat },
            { label: 'stretch', documentation: i18n.part_type_sprite.stretch },
            { label: 'random', documentation: i18n.part_type_sprite.random }
        ],
        signature: '(ind, sprite, animat, stretch, random)'
    },
	part_type_step: {
        description: '[Function]' + i18n.part_type_step.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.part_type_step.ind },
            { label: 'step_number', documentation: i18n.part_type_step.step_number },
            { label: 'step_type', documentation: i18n.part_type_step.step_type }
        ],
        signature: '(ind, step_number, step_type)'
    },
	path_add: {
        description: '[Function]' + i18n.path_add.desc,
        available: datasimple.all
    },
	path_add_point: {
        description: '[Function]' + i18n.path_add_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_add_point.ind },
            { label: 'x', documentation: i18n.path_add_point.x },
            { label: 'y', documentation: i18n.path_add_point.y },
            { label: 'speed', documentation: i18n.path_add_point.speed }
        ],
        signature: '(ind, x, y, speed)'
    },
	path_append: {
        description: '[Function]' + i18n.path_append.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_append.ind },
            { label: 'path', documentation: i18n.path_append.path }
        ],
        signature: '(ind, path)'
    },
	path_assign: {
        description: '[Function]' + i18n.path_assign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_assign.ind },
            { label: 'x', documentation: i18n.path_assign.x },
            { label: 'y', documentation: i18n.path_assign.y },
            { label: 'speed', documentation: i18n.path_assign.speed }
        ],
        signature: '(ind, x, y, speed)'
    },
	path_change_point: {
        description: '[Function]' + i18n.path_change_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_change_point.ind },
            { label: 'n', documentation: i18n.path_change_point.n },
            { label: 'x', documentation: i18n.path_change_point.x },
            { label: 'y', documentation: i18n.path_change_point.y },
            { label: 'speed', documentation: i18n.path_change_point.speed }
        ],
        signature: '(ind, n, x, y, speed)'
    },
	path_clear_points: {
        description: '[Function]' + i18n.path_clear_points.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_clear_points.ind }
        ],
        signature: '(ind)'
    },
	path_delete: {
        description: '[Function]' + i18n.path_delete.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_delete.ind }
        ],
        signature: '(ind)'
    },
	path_delete_point: {
        description: '[Function]' + i18n.path_delete_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_delete_point.ind },
            { label: 'n', documentation: i18n.path_delete_point.n }
        ],
        signature: '(ind, n)'
    },
	path_duplicate: {
        description: '[Function]' + i18n.path_duplicate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_duplicate.ind }
        ],
        signature: '(ind)'
    },
	path_end: {
        description: '[Function]' + i18n.path_end.desc,
        available: datasimple.all
    },
	path_exists: {
        description: '[Function]' + i18n.path_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_exists.ind }
        ],
        signature: '(ind)'
    },
	path_flip: {
        description: '[Function]' + i18n.path_flip.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_flip.ind }
        ],
        signature: '(ind)'
    },
	path_get_closed: {
        description: '[Function]' + i18n.path_get_closed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_closed.ind }
        ],
        signature: '(ind)'
    },
	path_get_kind: {
        description: '[Function]' + i18n.path_get_kind.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_kind.ind }
        ],
        signature: '(ind)'
    },
	path_get_length: {
        description: '[Function]' + i18n.path_get_length.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_length.ind }
        ],
        signature: '(ind)'
    },
	path_get_name: {
        description: '[Function]' + i18n.path_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_name.ind }
        ],
        signature: '(ind)'
    },
	path_get_number: {
        description: '[Function]' + i18n.path_get_number.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_number.ind }
        ],
        signature: '(ind)'
    },
	path_get_point_speed: {
        description: '[Function]' + i18n.path_get_point_speed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_point_speed.ind },
            { label: 'n', documentation: i18n.path_get_point_speed.n }
        ],
        signature: '(ind, n)'
    },
	path_get_point_x: {
        description: '[Function]' + i18n.path_get_point_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_point_x.ind },
            { label: 'n', documentation: i18n.path_get_point_x.n }
        ],
        signature: '(ind, n)'
    },
	path_get_point_y: {
        description: '[Function]' + i18n.path_get_point_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_point_y.ind },
            { label: 'n', documentation: i18n.path_get_point_y.n }
        ],
        signature: '(ind, n)'
    },
	path_get_precision: {
        description: '[Function]' + i18n.path_get_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_precision.ind }
        ],
        signature: '(ind)'
    },
	path_get_speed: {
        description: '[Function]' + i18n.path_get_speed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_speed.ind },
            { label: 'pos', documentation: i18n.path_get_speed.pos }
        ],
        signature: '(ind, pos)'
    },
	path_get_time: {
        description: '[Function]' + i18n.path_get_time.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_time.ind },
            { label: 'speed', documentation: i18n.path_get_time.speed }
        ],
        signature: '(ind, speed)'
    },
	path_get_x: {
        description: '[Function]' + i18n.path_get_x.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_x.ind },
            { label: 'pos', documentation: i18n.path_get_x.pos }
        ],
        signature: '(ind, pos)'
    },
	path_get_y: {
        description: '[Function]' + i18n.path_get_y.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_get_y.ind },
            { label: 'pos', documentation: i18n.path_get_y.pos }
        ],
        signature: '(ind, pos)'
    },
	path_insert_point: {
        description: '[Function]' + i18n.path_insert_point.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_insert_point.ind },
            { label: 'n', documentation: i18n.path_insert_point.n },
            { label: 'x', documentation: i18n.path_insert_point.x },
            { label: 'y', documentation: i18n.path_insert_point.y },
            { label: 'speed', documentation: i18n.path_insert_point.speed }
        ],
        signature: '(ind, n, x, y, speed)'
    },
	path_mirror: {
        description: '[Function]' + i18n.path_mirror.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_mirror.ind }
        ],
        signature: '(ind)'
    },
	path_rescale: {
        description: '[Function]' + i18n.path_rescale.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_rescale.ind },
            { label: 'xscale', documentation: i18n.path_rescale.xscale },
            { label: 'yscale', documentation: i18n.path_rescale.yscale }
        ],
        signature: '(ind, xscale, yscale)'
    },
	path_reverse: {
        description: '[Function]' + i18n.path_reverse.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_reverse.ind }
        ],
        signature: '(ind)'
    },
	path_rotate: {
        description: '[Function]' + i18n.path_rotate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_rotate.ind },
            { label: 'angle', documentation: i18n.path_rotate.angle }
        ],
        signature: '(ind, angle)'
    },
	path_set_closed: {
        description: '[Function]' + i18n.path_set_closed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_set_closed.ind },
            { label: 'closed', documentation: i18n.path_set_closed.closed }
        ],
        signature: '(ind, closed)'
    },
	path_set_kind: {
        description: '[Function]' + i18n.path_set_kind.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_set_kind.ind },
            { label: 'kind', documentation: i18n.path_set_kind.kind }
        ],
        signature: '(ind, kind)'
    },
	path_set_precision: {
        description: '[Function]' + i18n.path_set_precision.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_set_precision.ind },
            { label: 'prec', documentation: i18n.path_set_precision.prec }
        ],
        signature: '(ind, prec)'
    },
	path_shift: {
        description: '[Function]' + i18n.path_shift.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.path_shift.ind },
            { label: 'xshift', documentation: i18n.path_shift.xshift },
            { label: 'yshift', documentation: i18n.path_shift.yshift }
        ],
        signature: '(ind, xshift, yshift)'
    },
	path_start: {
        description: '[Function]' + i18n.path_start.desc,
        available: datasimple.all,
        parameters: [
            { label: 'path', documentation: i18n.path_start.path },
            { label: 'speed', documentation: i18n.path_start.speed },
            { label: 'endaction', documentation: i18n.path_start.endaction },
            { label: 'absolute', documentation: i18n.path_start.aboslute }
        ],
        signature: '(path, speed, endaction, absolute)'
    },
	physics_apply_angular_impulse: {
        description: '[Function]' + i18n.physics_apply_angular_impulse.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'impulse', documentation: i18n.physics_apply_angular_impulse.impulse }
        ],
        signature: '(impulse)'
    },
	physics_apply_force: {
        description: '[Function]' + i18n.physics_apply_force.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xpos', documentation: i18n.physics_apply_force.xpos },
            { label: 'ypos', documentation: i18n.physics_apply_force.ypos },
            { label: 'xforce', documentation: i18n.physics_apply_force.xforce },
            { label: 'yforce', documentation: i18n.physics_apply_force.yforce }
        ],
        signature: '(xpos, ypos, xforce, yforce)'
    },
	physics_apply_impulse: {
        description: '[Function]' + i18n.physics_apply_impulse.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xpos', documentation: i18n.physics_apply_impulse.xpos },
            { label: 'ypos', documentation: i18n.physics_apply_impulse.ypos },
            { label: 'ximpulse', documentation: i18n.physics_apply_impulse.ximpulse },
            { label: 'yimpulse', documentation: i18n.physics_apply_impulse.yimpulse }
        ],
        signature: '(xpos, ypos, ximpulse, yimpulse)'
    },
	physics_apply_local_force: {
        description: '[Function]' + i18n.physics_apply_local_force.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xlocal', documentation: i18n.physics_apply_local_force.xlocal },
            { label: 'ylocal', documentation: i18n.physics_apply_local_force.ylocal },
            { label: 'xforce_local', documentation: i18n.physics_apply_local_force.xforce_local },
            { label: 'yforce_local', documentation: i18n.physics_apply_local_force.yforce_local }
        ],
        signature: '(xlocal, ylocal, xforce_local, yforce_local)'
    },
	physics_apply_local_impulse: {
        description: '[Function]' + i18n.physics_apply_local_impulse.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'xlocal', documentation: i18n.physics_apply_local_impulse.xlocal },
            { label: 'ylocal', documentation: i18n.physics_apply_local_impulse.ylocal },
            { label: 'ximpulse_local', documentation: i18n.physics_apply_local_impulse.ximpulse_local },
            { label: 'yimpulse_local', documentation: i18n.physics_apply_local_impulse.yimpulse_local }
        ],
        signature: '(xlocal, ylocal, ximpulse_local, yimpulse_local)'
    },
	physics_apply_torque: {
        description: '[Function]' + i18n.physics_apply_torque.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'torque', documentation: i18n.physics_apply_torque.torque }
        ],
        signature: '(torque)'
    },
	physics_draw_debug: {
        description: '[Function]' + i18n.physics_draw_debug.desc,
        available: datasimple.gms1
    },
	physics_fixture_add_point: {
        description: '[Function]' + i18n.physics_fixture_add_point.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_add_point.fixture },
            { label: 'local_x', documentation: i18n.physics_fixture_add_point.local_x },
            { label: 'local_y', documentation: i18n.physics_fixture_add_point.local_y }
        ],
        signature: '(fixture, local_x, local_y)'
    },
	physics_fixture_bind: {
        description: '[Function]' + i18n.physics_fixture_bind.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_bind.fixture },
            { label: 'obj', documentation: i18n.physics_fixture_bind.obj }
        ],
        signature: '(fixture, obj)'
    },
	physics_fixture_bind_ext: {
        description: '[Function]' + i18n.physics_fixture_bind_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_bind_ext.fixture },
            { label: 'obj', documentation: i18n.physics_fixture_bind_ext.obj },
            { label: 'xo', documentation: i18n.physics_fixture_bind_ext.xo },
            { label: 'yo', documentation: i18n.physics_fixture_bind_ext.yo }
        ],
        signature: '(fixture, obj, xo, yo)'
    },
	physics_fixture_create: {
        description: '[Function]' + i18n.physics_fixture_create.desc,
        available: datasimple.gms1
    },
	physics_fixture_delete: {
        description: '[Function]' + i18n.physics_fixture_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_delete.fixture }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_angular_damping: {
        description: '[Function]' + i18n.physics_fixture_set_angular_damping.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_angular_damping.fixture },
            { label: 'damping', documentation: i18n.physics_fixture_set_angular_damping.damping }
        ],
        signature: '(fixture, damping)'
    },
	physics_fixture_set_awake: {
        description: '[Function]' + i18n.physics_fixture_set_awake.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_awake.fixture },
            { label: 'flag', documentation: i18n.physics_fixture_set_awake.flag }
        ],
        signature: '(fixture, flag)'
    },
	physics_fixture_set_box_shape: {
        description: '[Function]' + i18n.physics_fixture_set_box_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_box_shape.fixture },
            { label: 'halfWidth', documentation: i18n.physics_fixture_set_box_shape.halfWidth },
            { label: 'halfHeight', documentation: i18n.physics_fixture_set_box_shape.halfHeight }
        ],
        signature: '(fixture, halfWidth, halfHeight)'
    },
	physics_fixture_set_chain_shape: {
        description: '[Function]' + i18n.physics_fixture_set_chain_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_chain_shape.fixture },
            { label: 'loop', documentation: i18n.physics_fixture_set_chain_shape.loop }
        ],
        signature: '(fixture, loop)'
    },
	physics_fixture_set_circle_shape: {
        description: '[Function]' + i18n.physics_fixture_set_circle_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_circle_shape.fixture },
            { label: 'circleRadius', documentation: i18n.physics_fixture_set_circle_shape.circleRadius }
        ],
        signature: '(fixture, circleRadius)'
    },
	physics_fixture_set_collision_group: {
        description: '[Function]' + i18n.physics_fixture_set_collision_group.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_collision_group.fixture },
            { label: 'group', documentation: i18n.physics_fixture_set_collision_group.group }
        ],
        signature: '(fixture, group)'
    },
	physics_fixture_set_density: {
        description: '[Function]' + i18n.physics_fixture_set_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_density.fixture },
            { label: 'density', documentation: i18n.physics_fixture_set_density.density }
        ],
        signature: '(fixture, density)'
    },
	physics_fixture_set_edge_shape: {
        description: '[Function]' + i18n.physics_fixture_set_edge_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_edge_shape.fixture },
            { label: 'local_x1', documentation: i18n.physics_fixture_set_edge_shape.local_x1 },
            { label: 'local_y1', documentation: i18n.physics_fixture_set_edge_shape.local_y1 },
            { label: 'local_x2', documentation: i18n.physics_fixture_set_edge_shape.local_x2 },
            { label: 'local_y2', documentation: i18n.physics_fixture_set_edge_shape.local_y2 }
        ],
        signature: '(fixture, local_x1, local_y1, local_x2, local_y2)'
    },
	physics_fixture_set_friction: {
        description: '[Function]' + i18n.physics_fixture_set_friction.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_friction.fixture },
            { label: 'friction', documentation: i18n.physics_fixture_set_friction.friction }
        ],
        signature: '(fixture, friction)'
    },
	physics_fixture_set_kinematic: {
        description: '[Function]' + i18n.physics_fixture_set_kinematic.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_kinematic.fixture }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_linear_damping: {
        description: '[Function]' + i18n.physics_fixture_set_linear_damping.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_linear_damping.fixture },
            { label: 'damping', documentation: i18n.physics_fixture_set_linear_damping.damping }
        ],
        signature: '(fixture, damping)'
    },
	physics_fixture_set_polygon_shape: {
        description: '[Function]' + i18n.physics_fixture_set_polygon_shape.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_polygon_shape.fixture }
        ],
        signature: '(fixture)'
    },
	physics_fixture_set_restitution: {
        description: '[Function]' + i18n.physics_fixture_set_restitution.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_restitution.fixture },
            { label: 'restitution', documentation: i18n.physics_fixture_set_restitution.restitution }
        ],
        signature: '(fixture, restitution)'
    },
	physics_fixture_set_sensor: {
        description: '[Function]' + i18n.physics_fixture_set_sensor.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_fixture_set_sensor.fixture },
            { label: 'sensorState', documentation: i18n.physics_fixture_set_sensor.sensorState }
        ],
        signature: '(fixture, sensorState)'
    },
	physics_get_density: {
        description: '[Function]' + i18n.physics_get_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_get_density.fixture }
        ],
        signature: '(fixture)'
    },
	physics_get_friction: {
        description: '[Function]' + i18n.physics_get_friction.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_get_friction.fixture }
        ],
        signature: '(fixture)'
    },
	physics_get_restitution: {
        description: '[Function]' + i18n.physics_get_restitution.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_get_restitution.fixture }
        ],
        signature: '(fixture)'
    },
	physics_joint_delete: {
        description: '[Function]' + i18n.physics_joint_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_delete.joint }
        ],
        signature: '(joint)'
    },
	physics_joint_distance_create: {
        description: '[Function]' + i18n.physics_joint_distance_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_distance_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_distance_create.inst2 },
            { label: 'anchor_1_x', documentation: i18n.physics_joint_distance_create.anchor_1_x },
            { label: 'anchor_1_y', documentation: i18n.physics_joint_distance_create.anchor_1_y },
            { label: 'anchor_2_x', documentation: i18n.physics_joint_distance_create.anchor_2_x },
            { label: 'anchor_2_y', documentation: i18n.physics_joint_distance_create.anchor_2_y },
            { label: 'collideInstances', documentation: i18n.physics_joint_distance_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, collideInstances)'
    },
	physics_joint_enable_motor: {
        description: '[Function]' + i18n.physics_joint_enable_motor.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_enable_motor.joint },
            { label: 'motorState', documentation: i18n.physics_joint_enable_motor.motorState }
        ],
        signature: '(joint, motorState)'
    },
	physics_joint_friction_create: {
        description: '[Function]' + i18n.physics_joint_friction_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_friction_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_friction_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_friction_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_friction_create.anchor_y },
            { label: 'max_force', documentation: i18n.physics_joint_friction_create.max_force },
            { label: 'max_torque', documentation: i18n.physics_joint_friction_create.max_torque },
            { label: 'collideInstances', documentation: i18n.physics_joint_friction_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, max_force, max_torque, collideInstances)'
    },
	physics_joint_gear_create: {
        description: '[Function]' + i18n.physics_joint_gear_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_gear_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_gear_create.inst2 },
            { label: 'revoluteJoint', documentation: i18n.physics_joint_gear_create.revoluteJoint },
            { label: 'prismaticJoint', documentation: i18n.physics_joint_gear_create.prismaticJoint },
            { label: 'ratio', documentation: i18n.physics_joint_gear_create.ratio }
        ],
        signature: '(inst1, inst2, revoluteJoint, prismaticJoint, ratio)'
    },
	physics_joint_get_value: {
        description: '[Function]' + i18n.physics_joint_get_value.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_get_value.joint },
            { label: 'field', documentation: i18n.physics_joint_get_value.field }
        ],
        signature: '(joint, field)'
    },
	physics_joint_prismatic_create: {
        description: '[Function]' + i18n.physics_joint_prismatic_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_prismatic_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_prismatic_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_prismatic_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_prismatic_create.anchor_y },
            { label: 'axis_x', documentation: i18n.physics_joint_prismatic_create.axis_x },
            { label: 'axis_y', documentation: i18n.physics_joint_prismatic_create.axis_y },
            { label: 'lower_translation_limit', documentation: i18n.physics_joint_prismatic_create.lower_translation_limit },
            { label: 'upper_translation_limit', documentation: i18n.physics_joint_prismatic_create.upper_translation_limit },
            { label: 'enable_limit', documentation: i18n.physics_joint_prismatic_create.enable_limit },
            { label: 'max_motor_force', documentation: i18n.physics_joint_prismatic_create.max_motor_force },
            { label: 'motor_speed', documentation: i18n.physics_joint_prismatic_create.motor_speed },
            { label: 'enable_motor', documentation: i18n.physics_joint_prismatic_create.enable_motor },
            { label: 'collideInstances', documentation: i18n.physics_joint_prismatic_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, lower_translation_limit, upper_translation_limit, enable_limit, max_motor_force, motor_speed, enable_motor, collideInstances)'
    },
	physics_joint_pulley_create: {
        description: '[Function]' + i18n.physics_joint_pulley_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_pulley_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_pulley_create.inst2 },
            { label: 'anchor_1_x', documentation: i18n.physics_joint_pulley_create.anchor_1_x },
            { label: 'anchor_1_y', documentation: i18n.physics_joint_pulley_create.anchor_1_y },
            { label: 'anchor_2_x', documentation: i18n.physics_joint_pulley_create.anchor_2_x },
            { label: 'anchor_2_y', documentation: i18n.physics_joint_pulley_create.anchor_2_y },
            { label: 'local_anchor_1_x', documentation: i18n.physics_joint_pulley_create.local_anchor_1_x },
            { label: 'local_anchor_1_y', documentation: i18n.physics_joint_pulley_create.local_anchor_1_y },
            { label: 'local_anchor_2_x', documentation: i18n.physics_joint_pulley_create.local_anchor_2_x },
            { label: 'local_anchor_2_y', documentation: i18n.physics_joint_pulley_create.local_anchor_2_y },
            { label: 'ratio', documentation: i18n.physics_joint_pulley_create.ratio },
            { label: 'collideInstances', documentation: i18n.physics_joint_pulley_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, local_anchor_1_x, local_anchor_1_y, local_anchor_2_x, local_anchor_2_y, ratio, collideInstances)'
    },
	physics_joint_revolute_create: {
        description: '[Function]' + i18n.physics_joint_revolute_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_revolute_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_revolute_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_revolute_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_revolute_create.anchor_y },
            { label: 'lower_translation_limit', documentation: i18n.physics_joint_revolute_create.lower_translation_limit },
            { label: 'upper_translation_limit', documentation: i18n.physics_joint_revolute_create.upper_translation_limit },
            { label: 'enable_limit', documentation: i18n.physics_joint_revolute_create.enable_limit },
            { label: 'max_motor_force', documentation: i18n.physics_joint_revolute_create.max_motor_force },
            { label: 'motor_speed', documentation: i18n.physics_joint_revolute_create.motor_speed },
            { label: 'enable_motor', documentation: i18n.physics_joint_revolute_create.enable_motor },
            { label: 'collideInstances', documentation: i18n.physics_joint_revolute_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, lower_angle_limit, upper_angle_limit, enable_limit, max_motor_torque, motor_speed, enable_motor, collideInstances)'
    },
	physics_joint_rope_create: {
        description: '[Function]' + i18n.physics_joint_rope_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_rope_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_rope_create.inst2 },
            { label: 'anchor_1_x', documentation: i18n.physics_joint_rope_create.anchor_1_x },
            { label: 'anchor_1_y', documentation: i18n.physics_joint_rope_create.anchor_1_y },
            { label: 'anchor_2_x', documentation: i18n.physics_joint_rope_create.anchor_2_x },
            { label: 'anchor_2_y', documentation: i18n.physics_joint_rope_create.anchor_2_y },
            { label: 'maxLength', documentation: i18n.physics_joint_rope_create.maxLength },
            { label: 'collideInstances', documentation: i18n.physics_joint_rope_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_1_x, anchor_1_y, anchor_2_x, anchor_2_y, maxLength, collideInstances)'
    },
	physics_joint_set_value: {
        description: '[Function]' + i18n.physics_joint_set_value.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'joint', documentation: i18n.physics_joint_set_value.joint },
            { label: 'field', documentation: i18n.physics_joint_set_value.field },
            { label: 'value', documentation: i18n.physics_joint_set_value.value }
        ],
        signature: '(joint, field, value)'
    },
	physics_joint_weld_create: {
        description: '[Function]' + i18n.physics_joint_weld_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_weld_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_weld_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_weld_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_weld_create.anchor_y },
            { label: 'ref_angle', documentation: i18n.physics_joint_weld_create.ref_angle },
            { label: 'freq_hz', documentation: i18n.physics_joint_weld_create.freq_hz },
            { label: 'damping_ratio', documentation: i18n.physics_joint_weld_create.damping_ratio },
            { label: 'collideInstances', documentation: i18n.physics_joint_weld_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, ref_angle, freq_hz, damping_ratio, collideInstances)'
    },
	physics_joint_wheel_create: {
        description: '[Function]' + i18n.physics_joint_wheel_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst1', documentation: i18n.physics_joint_wheel_create.inst1 },
            { label: 'inst2', documentation: i18n.physics_joint_wheel_create.inst2 },
            { label: 'anchor_x', documentation: i18n.physics_joint_wheel_create.anchor_x },
            { label: 'anchor_y', documentation: i18n.physics_joint_wheel_create.anchor_y },
            { label: 'axis_x', documentation: i18n.physics_joint_wheel_create.axis_x },
            { label: 'axis_y', documentation: i18n.physics_joint_wheel_create.axis_y },
            { label: 'enableMotor', documentation: i18n.physics_joint_wheel_create.enableMotor },
            { label: 'max_motor_torque', documentation: i18n.physics_joint_wheel_create.max_motor_torque },
            { label: 'motor_speed', documentation: i18n.physics_joint_wheel_create.motor_speed },
            { label: 'freq_hz', documentation: i18n.physics_joint_wheel_create.freq_hz },
            { label: 'damping_ratio', documentation: i18n.physics_joint_wheel_create.damping_ratio },
            { label: 'collideInstances', documentation: i18n.physics_joint_wheel_create.collideInstances }
        ],
        signature: '(inst1, inst2, anchor_x, anchor_y, axis_x, axis_y, enableMotor, max_motor_torque, motor_speed, freq_hz, damping_ratio, collideInstances)'
    },
	physics_mass_properties: {
        description: '[Function]' + i18n.physics_mass_properties.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'mass', documentation: i18n.physics_mass_properties.mass },
            { label: 'local_centre_of_mass_x', documentation: i18n.physics_mass_properties.local_centre_of_mass_x },
            { label: 'local_centre_of_mass_y', documentation: i18n.physics_mass_properties.local_centre_of_mass_y },
            { label: 'inertia', documentation: i18n.physics_mass_properties.inertia }
        ],
        signature: '(mass, local_centre_of_mass_x, local_centre_of_mass_y, inertia)'
    },
	physics_particle_count: {
        description: '[Function]' + i18n.physics_particle_count.desc,
        available: datasimple.gms1
    },
	physics_particle_create: {
        description: '[Function]' + i18n.physics_particle_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typeflags', documentation: i18n.physics_particle_create.typeflags },
            { label: 'x', documentation: i18n.physics_particle_create.x },
            { label: 'y', documentation: i18n.physics_particle_create.y },
            { label: 'xv', documentation: i18n.physics_particle_create.xv },
            { label: 'yv', documentation: i18n.physics_particle_create.yv },
            { label: 'col', documentation: i18n.physics_particle_create.col },
            { label: 'alpha', documentation: i18n.physics_particle_create.alpha },
            { label: 'category', documentation: i18n.physics_particle_create.category }
        ],
        signature: '(typeflags, x, y, xv, yv, col, alpha, category)'
    },
	physics_particle_delete: {
        description: '[Function]' + i18n.physics_particle_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_delete.ind }
        ],
        signature: '(ind)'
    },
	physics_particle_delete_region_box: {
        description: '[Function]' + i18n.physics_particle_delete_region_box.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_particle_delete_region_box.x },
            { label: 'y', documentation: i18n.physics_particle_delete_region_box.y },
            { label: 'halfWidth', documentation: i18n.physics_particle_delete_region_box.halfWidth },
            { label: 'halfHeight', documentation: i18n.physics_particle_delete_region_box.halfHeight }
        ],
        signature: '(x, y, halfWidth, halfHeight)'
    },
	physics_particle_delete_region_circle: {
        description: '[Function]' + i18n.physics_particle_delete_region_circle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_particle_delete_region_circle.x },
            { label: 'y', documentation: i18n.physics_particle_delete_region_circle.y },
            { label: 'radius', documentation: i18n.physics_particle_delete_region_circle.radius }
        ],
        signature: '(x, y, radius)'
    },
	physics_particle_delete_region_poly: {
        description: '[Function]' + i18n.physics_particle_delete_region_poly.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'pointList', documentation: i18n.physics_particle_delete_region_poly.pointList }
        ],
        signature: '(pointList)'
    },
	physics_particle_draw: {
        description: '[Function]' + i18n.physics_particle_draw.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typemask', documentation: i18n.physics_particle_draw.typemask },
            { label: 'category', documentation: i18n.physics_particle_draw.category },
            { label: 'sprite', documentation: i18n.physics_particle_draw.sprite },
            { label: 'subimg', documentation: i18n.physics_particle_draw.subimg }
        ],
        signature: '(typemask, category, sprite, subimg)'
    },
	physics_particle_draw_ext: {
        description: '[Function]' + i18n.physics_particle_draw_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typemask', documentation: i18n.physics_particle_draw_ext.typemask },
            { label: 'category', documentation: i18n.physics_particle_draw_ext.category },
            { label: 'sprite', documentation: i18n.physics_particle_draw_ext.sprite },
            { label: 'subimg', documentation: i18n.physics_particle_draw_ext.subimg },
            { label: 'xscale', documentation: i18n.physics_particle_draw_ext.xscale },
            { label: 'yscale', documentation: i18n.physics_particle_draw_ext.yscale },
            { label: 'angle', documentation: i18n.physics_particle_draw_ext.angle },
            { label: 'col', documentation: i18n.physics_particle_draw_ext.col },
            { label: 'alpha', documentation: i18n.physics_particle_draw_ext.alpha }
        ],
        signature: '(typemask, category, sprite, subimg, xscale, yscale, angle, col, alpha)'
    },
	physics_particle_get_damping: {
        description: '[Function]' + i18n.physics_particle_get_damping.desc,
        available: datasimple.gms1
    },
	physics_particle_get_data: {
        description: '[Function]' + i18n.physics_particle_get_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'buffer', documentation: i18n.physics_particle_get_data.buffer },
            { label: 'dataFlags', documentation: i18n.physics_particle_get_data.dataFlags }
        ],
        signature: '(buffer, dataFlags)'
    },
	physics_particle_get_data_particle: {
        description: '[Function]' + i18n.physics_particle_get_data_particle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_get_data_particle.ind },
            { label: 'buffer', documentation: i18n.physics_particle_get_data_particle.buffer },
            { label: 'dataFlags', documentation: i18n.physics_particle_get_data_particle.dataFlags }
        ],
        signature: '(ind, buffer, dataFlags)'
    },
	physics_particle_get_density: {
        description: '[Function]' + i18n.physics_particle_get_density.desc,
        available: datasimple.gms1
    },
	physics_particle_get_gravity_scale: {
        description: '[Function]' + i18n.physics_particle_get_gravity_scale.desc,
        available: datasimple.gms1
    },
	physics_particle_get_group_flags: {
        description: '[Function]' + i18n.physics_particle_get_group_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_get_group_flags.group }
        ],
        signature: '(group)'
    },
	physics_particle_get_max_count: {
        description: '[Function]' + i18n.physics_particle_get_max_count.desc,
        available: datasimple.gms1
    },
	physics_particle_get_radius: {
        description: '[Function]' + i18n.physics_particle_get_radius.desc,
        available: datasimple.gms1
    },
	physics_particle_group_add_point: {
        description: '[Function]' + i18n.physics_particle_group_add_point.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_particle_group_add_point.x },
            { label: 'y', documentation: i18n.physics_particle_group_add_point.y }
        ],
        signature: '(x, y)'
    },
	physics_particle_group_begin: {
        description: '[Function]' + i18n.physics_particle_group_begin.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'typeflags', documentation: i18n.physics_particle_group_begin.typeflags },
            { label: 'groupflag', documentation: i18n.physics_particle_group_begin.groupflag },
            { label: 'x', documentation: i18n.physics_particle_group_begin.x },
            { label: 'y', documentation: i18n.physics_particle_group_begin.y },
            { label: 'ang', documentation: i18n.physics_particle_group_begin.ang },
            { label: 'xv', documentation: i18n.physics_particle_group_begin.xv },
            { label: 'yv', documentation: i18n.physics_particle_group_begin.yv },
            { label: 'angVelocity', documentation: i18n.physics_particle_group_begin.angVelocity },
            { label: 'col', documentation: i18n.physics_particle_group_begin.col },
            { label: 'alpha', documentation: i18n.physics_particle_group_begin.alpha },
            { label: 'strength', documentation: i18n.physics_particle_group_begin.strength },
            { label: 'category', documentation: i18n.physics_particle_group_begin.category }
        ],
        signature: '(typeflags, groupflags, x, y, ang, xv, yv, angVelocity, col, alpha, strength, category)'
    },
	physics_particle_group_box: {
        description: '[Function]' + i18n.physics_particle_group_box.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'halfWidth', documentation: i18n.physics_particle_group_box.halfWidth },
            { label: 'halfHeight', documentation: i18n.physics_particle_group_box.halfHeight }
        ],
        signature: '(halfWidth, halfHeight)'
    },
	physics_particle_group_circle: {
        description: '[Function]' + i18n.physics_particle_group_circle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'radius', documentation: i18n.physics_particle_group_circle.radius }
        ],
        signature: '(radius)'
    },
	physics_particle_group_count: {
        description: '[Function]' + i18n.physics_particle_group_count.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_count.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_delete: {
        description: '[Function]' + i18n.physics_particle_group_delete.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_group_delete.ind }
        ],
        signature: '(ind)'
    },
	physics_particle_group_end: {
        description: '[Function]' + i18n.physics_particle_group_end.desc,
        available: datasimple.gms1
    },
	physics_particle_group_get_angle: {
        description: '[Function]' + i18n.physics_particle_group_get_angle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_angle.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_ang_vel: {
        description: '[Function]' + i18n.physics_particle_group_get_ang_vel.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_ang_vel.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_centre_x: {
        description: '[Function]' + i18n.physics_particle_group_get_centre_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_centre_x.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_centre_y: {
        description: '[Function]' + i18n.physics_particle_group_get_centre_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_centre_y.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_data: {
        description: '[Function]' + i18n.physics_particle_group_get_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_data.group },
            { label: 'buffer', documentation: i18n.physics_particle_group_get_data.buffer },
            { label: 'dataFlags', documentation: i18n.physics_particle_group_get_data.dataFlags }
        ],
        signature: '(group, buffer, dataFlags)'
    },
	physics_particle_group_get_inertia: {
        description: '[Function]' + i18n.physics_particle_group_get_inertia.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_inertia.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_mass: {
        description: '[Function]' + i18n.physics_particle_group_get_mass.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_mass.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_vel_x: {
        description: '[Function]' + i18n.physics_particle_group_get_vel_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_vel_x.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_vel_y: {
        description: '[Function]' + i18n.physics_particle_group_get_vel_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_vel_y.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_x: {
        description: '[Function]' + i18n.physics_particle_group_get_x.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_x.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_get_y: {
        description: '[Function]' + i18n.physics_particle_group_get_y.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_group_get_y.group }
        ],
        signature: '(group)'
    },
	physics_particle_group_join: {
        description: '[Function]' + i18n.physics_particle_group_join.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'to', documentation: i18n.physics_particle_group_join.to },
            { label: 'from', documentation: i18n.physics_particle_group_join.from }
        ],
        signature: '(to, from)'
    },
	physics_particle_group_polygon: {
        description: '[Function]' + i18n.physics_particle_group_polygon.desc,
        available: datasimple.gms1
    },
	physics_particle_set_category_flags: {
        description: '[Function]' + i18n.physics_particle_set_category_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'catagory', documentation: i18n.physics_particle_set_category_flags.catagory },
            { label: 'typeflags', documentation: i18n.physics_particle_set_category_flags.typeflags }
        ],
        signature: '(category, typeflags)'
    },
	physics_particle_set_damping: {
        description: '[Function]' + i18n.physics_particle_set_damping.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'damping', documentation: i18n.physics_particle_set_damping.damping }
        ],
        signature: '(damping)'
    },
	physics_particle_set_density: {
        description: '[Function]' + i18n.physics_particle_set_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'density', documentation: i18n.physics_particle_set_density.density }
        ],
        signature: '(density)'
    },
	physics_particle_set_flags: {
        description: '[Function]' + i18n.physics_particle_set_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n.physics_particle_set_flags.ind },
            { label: 'typeflags', documentation: i18n.physics_particle_set_flags.typeflags }
        ],
        signature: '(ind, typeflags)'
    },
	physics_particle_set_gravity_scale: {
        description: '[Function]' + i18n.physics_particle_set_gravity_scale.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'scale', documentation: i18n.physics_particle_set_gravity_scale.scale }
        ],
        signature: '(scale)'
    },
	physics_particle_set_group_flags: {
        description: '[Function]' + i18n.physics_particle_set_group_flags.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'group', documentation: i18n.physics_particle_set_group_flags.group },
            { label: 'groupflags', documentation: i18n.physics_particle_set_group_flags.groupflags }
        ],
        signature: '(group, groupflags)'
    },
	physics_particle_set_max_count: {
        description: '[Function]' + i18n.physics_particle_set_max_count.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'count', documentation: i18n.physics_particle_set_max_count.count }
        ],
        signature: '(count)'
    },
	physics_particle_set_radius: {
        description: '[Function]' + i18n.physics_particle_set_radius.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'radius', documentation: i18n.physics_particle_set_radius.radius }
        ],
        signature: '(radius)'
    },
	physics_pause_enable: {
        description: '[Function]' + i18n.physics_pause_enable.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'pause', documentation: i18n.physics_pause_enable.pause }
        ],
        signature: '(pause)'
    },
	physics_remove_fixture: {
        description: '[Function]' + i18n.physics_remove_fixture.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'inst', documentation: i18n.physics_remove_fixture.inst },
            { label: 'id', documentation: i18n.physics_remove_fixture.id }
        ],
        signature: '(inst, id)'
    },
	physics_set_density: {
        description: '[Function]' + i18n.physics_set_density.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_set_density.fixture },
            { label: 'density', documentation: i18n.physics_set_density.density }
        ],
        signature: '(fixture, density)'
    },
	physics_set_friction: {
        description: '[Function]' + i18n.physics_set_friction.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_set_friction.fixture },
            { label: 'friction', documentation: i18n.physics_set_friction.friction }
        ],
        signature: '(fixture, friction)'
    },
	physics_set_restitution: {
        description: '[Function]' + i18n.physics_set_restitution.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fixture', documentation: i18n.physics_set_restitution.fixture },
            { label: 'restitution', documentation: i18n.physics_set_restitution.restitution }
        ],
        signature: '(fixture, restitution)'
    },
	physics_test_overlap: {
        description: '[Function]' + i18n.physics_test_overlap.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.physics_test_overlap.x },
            { label: 'y', documentation: i18n.physics_test_overlap.y },
            { label: 'angle', documentation: i18n.physics_test_overlap.angle },
            { label: 'obj', documentation: i18n.physics_test_overlap.obj }
        ],
        signature: '(x, y, angle, obj)'
    },
	physics_world_create: {
        description: '[Function]' + i18n.physics_world_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'PixelToMetreScale', documentation: i18n.physics_world_create.PixelToMetreScale }
        ],
        signature: '(PixelToMetreScale)'
    },
	physics_world_draw_debug: {
        description: '[Function]' + i18n.physics_world_draw_debug.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'draw_flags', documentation: i18n.physics_world_draw_debug.draw_flags }
        ],
        signature: '(draw_flags)'
    },
	physics_world_gravity: {
        description: '[Function]' + i18n.physics_world_gravity.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'gx', documentation: i18n.physics_world_gravity.gx },
            { label: 'gy', documentation: i18n.physics_world_gravity.gy }
        ],
        signature: '(gx, gy)'
    },
	physics_world_update_iterations: {
        description: '[Function]' + i18n.physics_world_update_iterations.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'iterations', documentation: i18n.physics_world_update_iterations.iterations }
        ],
        signature: '(iterations)'
    },
	physics_world_update_speed: {
        description: '[Function]' + i18n.physics_world_update_speed.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'speed', documentation: i18n.physics_world_update_speed.speed }
        ],
        signature: '(speed)'
    },
	place_empty: {
        description: '[Function]' + i18n.place_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.place_empty.x },
            { label: 'y', documentation: i18n.place_empty.y }
        ],
        signature: '(x, y)'
    },
	place_free: {
        description: '[Function]' + i18n.place_free.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.place_free.x },
            { label: 'y', documentation: i18n.place_free.y }
        ],
        signature: '(x, y)'
    },
	place_meeting: {
        description: '[Function]' + i18n.place_meeting.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.place_meeting.x },
            { label: 'y', documentation: i18n.place_meeting.y },
            { label: 'obj', documentation: i18n.place_meeting.obj }
        ],
        signature: '(x, y, obj)'
    },
	place_snapped: {
        description: '[Function]' + i18n.place_snapped.desc,
        available: datasimple.all,
        parameters: [
            { label: 'hsnap', documentation: i18n.place_snapped.hsnap },
            { label: 'vsnap', documentation: i18n.place_snapped.vsnap }
        ],
        signature: '(hsnap, vsnap)'
    },
	point_direction: {
        description: '[Function]' + i18n.point_direction.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.point_direction.x1 },
            { label: 'y1', documentation: i18n.point_direction.y1 },
            { label: 'x2', documentation: i18n.point_direction.x2 },
            { label: 'y2', documentation: i18n.point_direction.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	point_distance: {
        description: '[Function]' + i18n.point_distance.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.point_distance.x1 },
            { label: 'y1', documentation: i18n.point_distance.y1 },
            { label: 'x2', documentation: i18n.point_distance.x2 },
            { label: 'y2', documentation: i18n.point_distance.y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	point_distance_3d: {
        description: '[Function]' + i18n.point_distance_3d.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x1', documentation: i18n.point_distance_3d.x1 },
            { label: 'y1', documentation: i18n.point_distance_3d.y1 },
            { label: 'z1', documentation: i18n.point_distance_3d.z1 },
            { label: 'x2', documentation: i18n.point_distance_3d.x2 },
            { label: 'y2', documentation: i18n.point_distance_3d.y2 },
            { label: 'z2', documentation: i18n.point_distance_3d.z2 }
        ],
        signature: '(x1, y1, z1, x2, y2, z2)'
    },
	point_in_circle: {
        description: '[Function]' + i18n.point_in_circle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'px', documentation: i18n.point_in_circle.px },
            { label: 'py', documentation: i18n.point_in_circle.py },
            { label: 'cx', documentation: i18n.point_in_circle.cx },
            { label: 'cy', documentation: i18n.point_in_circle.cy },
            { label: 'rad', documentation: i18n.point_in_circle.rad }
        ],
        signature: '(px, py, cx, cy, rad)'
    },
	point_in_rectangle: {
        description: '[Function]' + i18n.point_in_rectangle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'px', documentation: i18n.point_in_rectangle.px },
            { label: 'py', documentation: i18n.point_in_rectangle.py },
            { label: 'x1', documentation: i18n.point_in_rectangle.x1 },
            { label: 'y1', documentation: i18n.point_in_rectangle.y1 },
            { label: 'x2', documentation: i18n.point_in_rectangle.x2 },
            { label: 'y2', documentation: i18n.point_in_rectangle.y2 }
        ],
        signature: '(px, py, x1, y1, x2, y2)'
    },
	point_in_triangle: {
        description: '[Function]' + i18n.point_in_triangle.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'px', documentation: i18n.point_in_triangle.px },
            { label: 'py', documentation: i18n.point_in_triangle.py },
            { label: 'x1', documentation: i18n.point_in_triangle.x1 },
            { label: 'y1', documentation: i18n.point_in_triangle.y1 },
            { label: 'z1', documentation: i18n.point_in_triangle.z1 },
            { label: 'x2', documentation: i18n.point_in_triangle.x2 },
            { label: 'y2', documentation: i18n.point_in_triangle.y2 },
            { label: 'z2', documentation: i18n.point_in_triangle.z2 }
        ],
        signature: '(px, py, x1, y1, x2, y2, x3, y3)'
    },
	position_change: {
        description: '[Function]' + i18n.position_change.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_change.x },
            { label: 'y', documentation: i18n.position_change.y },
            { label: 'obj', documentation: i18n.position_change.obj },
            { label: 'performevents', documentation: i18n.position_change.performevents }
        ],
        signature: '(x, y, obj, performevents)'
    },
	position_destroy: {
        description: '[Function]' + i18n.position_destroy.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_destroy.x },
            { label: 'y', documentation: i18n.position_destroy.y }
        ],
        signature: '(x, y)'
    },
	position_empty: {
        description: '[Function]' + i18n.position_empty.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_empty.x },
            { label: 'y', documentation: i18n.position_empty.y }
        ],
        signature: '(x, y)'
    },
	position_meeting: {
        description: '[Function]' + i18n.position_meeting.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.position_meeting.x },
            { label: 'y', documentation: i18n.position_meeting.y },
            { label: 'obj', documentation: i18n.position_meeting.obj }
        ],
        signature: '(x, y, obj)'
    },
	power: {
        description: '[Function]' + i18n.power.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.power.x },
            { label: 'n', documentation: i18n.power.n }
        ],
        signature: '(x, n)'
    },
	ptr: {
        description: '[Function]' + i18n.ptr.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.ptr.val }
        ],
        signature: '(val)'
    },
	push_cancel_local_notification: {
        description: '[Function]' + i18n.push_cancel_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n.push_cancel_local_notification.id }
        ],
        signature: '(id)'
    },
	push_get_first_local_notification: {
        description: '[Function]' + i18n.push_get_first_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_map', documentation: i18n.push_get_first_local_notification.ds_map }
        ],
        signature: '(ds_map)'
    },
	push_get_next_local_notification: {
        description: '[Function]' + i18n.push_get_next_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ds_map', documentation: i18n.push_get_next_local_notification.ds_map }
        ],
        signature: '(ds_map)'
    },
	push_local_notification: {
        description: '[Function]' + i18n.push_local_notification.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fire_time', documentation: i18n.push_local_notification.fire_time },
            { label: 'title', documentation: i18n.push_local_notification.title },
            { label: 'message', documentation: i18n.push_local_notification.message },
            { label: 'data', documentation: i18n.push_local_notification.data }
        ],
        signature: '(fire_time, title, message, data)'
    },
	radtodeg: {
        description: '[Function]' + i18n.radtodeg.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.radtodeg.x }
        ],
        signature: '(x)'
    },
	random: {
        description: '[Function]' + i18n.random.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.random.x }
        ],
        signature: '(x)'
    },
	randomize: {
        description: '[Function]' + i18n.randomize.desc,
        available: datasimple.all
    },
	random_get_seed: {
        description: '[Function]' + i18n.random_get_seed.desc,
        available: datasimple.all
    },
	random_old: {
        description: '[Function]' + i18n.random_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.random_old.x }
        ],
        signature: '(x)'
    },
	random_range: {
        description: '[Function]' + i18n.random_range.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.random_range.x1 },
            { label: 'x2', documentation: i18n.random_range.x2 }
        ],
        signature: '(x1, x2)'
    },
	random_range_old: {
        description: '[Function]' + i18n.random_range_old.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n.random_range_old.x1 },
            { label: 'x2', documentation: i18n.random_range_old.x2 }
        ],
        signature: '(x1, x2)'
    },
	random_set_seed: {
        description: '[Function]' + i18n.random_set_seed.desc,
        available: datasimple.all,
        parameters: [
            { label: 'seed', documentation: i18n.random_set_seed.seed }
        ],
        signature: '(seed)'
    },
	random_use_old_version: {
        description: '[Function]' + i18n.random_use_old_version.desc,
        available: datasimple.all,
        parameters: [
            { label: 'trueFalse', documentation: i18n.random_use_old_version.trueFalse }
        ],
        signature: '(trueFalse)'
    },
	real: {
        description: '[Function]' + i18n.real.desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n.real.val }
        ],
        signature: '(val)'
    },
	rectangle_in_circle: {
        description: '[Function]' + i18n.rectangle_in_circle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sx1', documentation: i18n.rectangle_in_circle.sx1 },
            { label: 'sy1', documentation: i18n.rectangle_in_circle.sy1 },
            { label: 'sx2', documentation: i18n.rectangle_in_circle.sx2 },
            { label: 'sy2', documentation: i18n.rectangle_in_circle.sy2 },
            { label: 'cx', documentation: i18n.rectangle_in_circle.cx },
            { label: 'cy', documentation: i18n.rectangle_in_circle.cy },
            { label: 'rad', documentation: i18n.rectangle_in_circle.rad }
        ],
        signature: '(sx1, sy1, sx2, sy2, cx, cy, rad)'
    },
	rectangle_in_rectangle: {
        description: '[Function]' + i18n.rectangle_in_rectangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sx1', documentation: i18n.rectangle_in_rectangle.sx1 },
            { label: 'sy1', documentation: i18n.rectangle_in_rectangle.sy1 },
            { label: 'sx2', documentation: i18n.rectangle_in_rectangle.sx2 },
            { label: 'sy2', documentation: i18n.rectangle_in_rectangle.sy2 },
            { label: 'dx1', documentation: i18n.rectangle_in_rectangle.dx1 },
            { label: 'dy1', documentation: i18n.rectangle_in_rectangle.dy1 },
            { label: 'dx2', documentation: i18n.rectangle_in_rectangle.dx2 },
            { label: 'dy2', documentation: i18n.rectangle_in_rectangle.dy2 }
        ],
        signature: '(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2)'
    },
	rectangle_in_triangle: {
        description: '[Function]' + i18n.rectangle_in_triangle.desc,
        available: datasimple.all,
        parameters: [
            { label: 'sx1', documentation: i18n.rectangle_in_triangle.sx1 },
            { label: 'sy1', documentation: i18n.rectangle_in_triangle.sy1 },
            { label: 'sx2', documentation: i18n.rectangle_in_triangle.sx2 },
            { label: 'sy2', documentation: i18n.rectangle_in_triangle.sy2 },
            { label: 'x1', documentation: i18n.rectangle_in_triangle.x1 },
            { label: 'y1', documentation: i18n.rectangle_in_triangle.y1 },
            { label: 'x2', documentation: i18n.rectangle_in_triangle.x2 },
            { label: 'y2', documentation: i18n.rectangle_in_triangle.y2 },
            { label: 'x3', documentation: i18n.rectangle_in_triangle.x3 },
            { label: 'y3', documentation: i18n.rectangle_in_triangle.y3 }
        ],
        signature: '(sx1, sy1, sx2, sy2, x1, y1, x2, y2, x3, y3)'
    },
	room_add: {
        description: '[Function]' + i18n.room_add.desc,
        available: datasimple.all
    },
	room_assign: {
        description: '[Function]' + i18n.room_assign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_assign.ind },
            { label: 'source', documentation: i18n.room_assign.source }
        ],
        signature: '(ind, source)'
    },
	room_duplicate: {
        description: '[Function]' + i18n.room_duplicate.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_duplicate.ind }
        ],
        signature: '(ind)'
    },
	room_exists: {
        description: '[Function]' + i18n.room_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_exists.ind }
        ],
        signature: '(ind)'
    },
	room_get_name: {
        description: '[Function]' + i18n.room_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_get_name.ind }
        ],
        signature: '(ind)'
    },
	room_goto: {
        description: '[Function]' + i18n.room_goto.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.room_goto.numb }
        ],
        signature: '(numb)'
    },
	room_goto_next: {
        description: '[Function]' + i18n.room_goto_next.desc,
        available: datasimple.all
    },
	room_goto_previous: {
        description: '[Function]' + i18n.room_goto_previous.desc,
        available: datasimple.all
    },
	room_instance_add: {
        description: '[Function]' + i18n.room_instance_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_instance_add.ind },
            { label: 'x', documentation: i18n.room_instance_add.x },
            { label: 'y', documentation: i18n.room_instance_add.y },
            { label: 'obj', documentation: i18n.room_instance_add.obj }
        ],
        signature: '(ind, x, y, obj)'
    },
	room_instance_clear: {
        description: '[Function]' + i18n.room_instance_clear.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_instance_clear.ind }
        ],
        signature: '(ind)'
    },
	room_next: {
        description: '[Function]' + i18n.room_next.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.room_next.numb }
        ],
        signature: '(numb)'
    },
	room_previous: {
        description: '[Function]' + i18n.room_previous.desc,
        available: datasimple.all,
        parameters: [
            { label: 'numb', documentation: i18n.room_previous.numb }
        ],
        signature: '(numb)'
    },
	room_restart: {
        description: '[Function]' + i18n.room_restart.desc,
        available: datasimple.all
    },
	room_set_background_color: {
        description: '[Function]' + i18n.room_set_background_color.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_background_color.ind },
            { label: 'col', documentation: i18n.room_set_background_color.col },
            { label: 'show', documentation: i18n.room_set_background_color.show }
        ],
        signature: '(ind, col, show)'
    },
	room_set_background_colour: {
        description: '[Function]' + i18n.room_set_background_colour.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_background_colour.ind },
            { label: 'col', documentation: i18n.room_set_background_colour.col },
            { label: 'show', documentation: i18n.room_set_background_colour.show }
        ],
        signature: '(ind, col, show)'
    },
	room_set_height: {
        description: '[Function]' + i18n.room_set_height.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_height.ind },
            { label: 'h', documentation: i18n.room_set_height.h }
        ],
        signature: '(ind, h)'
    },
	room_set_persistent: {
        description: '[Function]' + i18n.room_set_persistent.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_persistent.ind },
            { label: 'pers', documentation: i18n.room_set_persistent.pers }
        ],
        signature: '(ind, pers)'
    },
	room_set_view_enabled: {
        description: '[Function]' + i18n.room_set_view_enabled.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_view_enabled.ind },
            { label: 'val', documentation: i18n.room_set_view_enabled.val }
        ],
        signature: '(ind, val)'
    },
	room_set_width: {
        description: '[Function]' + i18n.room_set_width.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.room_set_width.ind },
            { label: 'w', documentation: i18n.room_set_width.w }
        ],
        signature: '(ind, w)'
    },
	round: {
        description: '[Function]' + i18n.round.desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n.round.x }
        ],
        signature: '(x)'
    },
	screen_save: {
        description: '[Function]' + i18n.screen_save.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.screen_save.fname }
        ],
        signature: '(fname)'
    },
	screen_save_part: {
        description: '[Function]' + i18n.screen_save_part.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.screen_save_part.fname },
            { label: 'x', documentation: i18n.screen_save_part.x },
            { label: 'y', documentation: i18n.screen_save_part.y },
            { label: 'w', documentation: i18n.screen_save_part.w },
            { label: 'h', documentation: i18n.screen_save_part.h }
        ],
        signature: '(fname, x, y, w, h)'
    },
	script_execute: {
        description: '[Function]' + i18n.script_execute.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.script_execute.ind },
            { label: 'arg0', documentation: i18n.script_execute.arg0 },
            { label: 'arg1', documentation: i18n.script_execute.arg1 },
            { label: '...', documentation: i18n.script_execute.more }
        ],
        signature: '(ind, arg0, arg1, ...)'
    },
	script_exists: {
        description: '[Function]' + i18n.script_exists.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.script_exists.ind }
        ],
        signature: '(ind)'
    },
	script_get_name: {
        description: '[Function]' + i18n.script_get_name.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.script_get_name.ind }
        ],
        signature: '(ind)'
    },
	sha1_file: {
        description: '[Function]' + i18n.sha1_file.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'fname', documentation: i18n.sha1_file.fname }
        ],
        signature: '(fname)'
    },
	sha1_string_unicode: {
        description: '[Function]' + i18n.sha1_string_unicode.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.sha1_string_unicode.string }
        ],
        signature: '(string)'
    },
	sha1_string_utf8: {
        description: '[Function]' + i18n.sha1_string_utf8.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n.sha1_string_utf8.string }
        ],
        signature: '(string)'
    },
	shaders_are_supported: {
        description: '[Function]' + i18n.shaders_are_supported.desc,
        available: datasimple.gms1
    },
	shader_enable_corner_id: {
        description: '[Function]' + i18n.shader_enable_corner_id.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'enable', documentation: i18n.shader_enable_corner_id.enable }
        ],
        signature: '(enable)'
    },
	shader_get_sampler_index: {
        description: '[Function]' + i18n.shader_get_sampler_index.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_get_sampler_index.shader },
            { label: 'uniform_name', documentation: i18n.shader_get_sampler_index.uniform_name }
        ],
        signature: '(shader, uniform_name)'
    },
	shader_get_uniform: {
        description: '[Function]' + i18n.shader_get_uniform.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_get_uniform.shader },
            { label: 'uniform_name', documentation: i18n.shader_get_uniform.uniform_name }
        ],
        signature: '(shader, uniform_name)'
    },
	shader_is_compiled: {
        description: '[Function]' + i18n.shader_is_compiled.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_is_compiled.shader }
        ],
        signature: '(shader)'
    },
	shader_reset: {
        description: '[Function]' + i18n.shader_reset.desc,
        available: datasimple.gms1
    },
	shader_set: {
        description: '[Function]' + i18n.shader_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'shader', documentation: i18n.shader_set.shader }
        ],
        signature: '(shader)'
    },
	shader_set_uniform_f: {
        description: '[Function]' + i18n.shader_set_uniform_f.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_f.uniform_id },
            { label: 'val', documentation: i18n.shader_set_uniform_f.val },
            { label: '....', documentation: i18n.shader_set_uniform_f.more }
        ],
        signature: '(uniform_id, val, ....)'
    },
	shader_set_uniform_f_array: {
        description: '[Function]' + i18n.shader_set_uniform_f_array.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_f_array.uniform_id },
            { label: 'array', documentation: i18n.shader_set_uniform_f_array.array }
        ],
        signature: '(uniform_id, array)'
    },
	shader_set_uniform_i: {
        description: '[Function]' + i18n.shader_set_uniform_i.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_i.uniform_id },
            { label: 'val', documentation: i18n.shader_set_uniform_i.val },
            { label: '....', documentation: i18n.shader_set_uniform_i.more }
        ],
        signature: '(uniform_id, val, ....)'
    },
	shader_set_uniform_i_array: {
        description: '[Function]' + i18n.shader_set_uniform_i_array.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_i_array.uniform_id },
            { label: 'array', documentation: i18n.shader_set_uniform_i_array.array }
        ],
        signature: '(uniform_id, array)'
    },
	shader_set_uniform_matrix: {
        description: '[Function]' + i18n.shader_set_uniform_matrix.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_matrix.uniform_id }
        ],
        signature: '(uniform_id)'
    },
	shader_set_uniform_matrix_array: {
        description: '[Function]' + i18n.shader_set_uniform_matrix_array.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'uniform_id', documentation: i18n.shader_set_uniform_matrix_array.uniform_id },
            { label: 'array', documentation: i18n.shader_set_uniform_matrix_array.array }
        ],
        signature: '(uniform_id, array)'
    },
	shop_leave_rating: {
        description: '[Function]' + i18n.shop_leave_rating.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'text_string', documentation: i18n.shop_leave_rating.text_string },
            { label: 'yes_string', documentation: i18n.shop_leave_rating.yes_string },
            { label: 'no_string', documentation: i18n.shop_leave_rating.no_string },
            { label: 'url', documentation: i18n.shop_leave_rating.url }
        ],
        signature: '(text_string, yes_string, no_string, url)'
    },
	show_debug_message: {
        description: '[Function]' + i18n.show_debug_message.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_debug_message.str }
        ],
        signature: '(str)'
    },
	show_debug_overlay: {
        description: '[Function]' + i18n.show_debug_overlay.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bool', documentation: i18n.show_debug_overlay.bool }
        ],
        signature: '(bool)'
    },
	show_error: {
        description: '[Function]' + i18n.show_error.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_error.str },
            { label: 'abort', documentation: i18n.show_error.abort }
        ],
        signature: '(str, abort)'
    },
	show_message: {
        description: '[Function]' + i18n.show_message.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_message.str }
        ],
        signature: '(str)'
    },
	show_message_async: {
        description: '[Function]' + i18n.show_message_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.show_message_async.str }
        ],
        signature: '(str)'
    },
	show_question: {
        description: '[Function]' + i18n.show_question.desc,
        available: datasimple.all,
        parameters: [
            { label: 'str', documentation: i18n.show_question.str }
        ],
        signature: '(str)'
    },
	show_question_async: {
        description: '[Function]' + i18n.show_question_async.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n.show_question_async.str }
        ],
        signature: '(str)'
    },
	sign: {
        description: '[Function]' + i18n.sign.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n.sign.x }
        ],
        signature: '(x)'
    },
	sin: {
        description: '[Function]' + i18n.sin.desc,
        available: datasimple.all,
        parameters: [
            { label: 'radian_angle', documentation: i18n.sin.radian_angle }
        ],
        signature: '(radian_angle)'
    },
	skeleton_animation_clear: {
        description: '[Function]' + i18n.skeleton_animation_clear.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'track', documentation: i18n.skeleton_animation_clear.track }
        ],
        signature: '(track)'
    },
	skeleton_animation_get: {
        description: '[Function]' + i18n.skeleton_animation_get.desc,
        available: datasimple.gms1
    },
	skeleton_animation_get_duration: {
        description: '[Function]' + i18n.skeleton_animation_get_duration.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_get_duration.anim_name }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_get_ext: {
        description: '[Function]' + i18n.skeleton_animation_get_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'track', documentation: i18n.skeleton_animation_get_ext.track }
        ],
        signature: '(track)'
    },
	skeleton_animation_get_frames: {
        description: '[Function]' + i18n.skeleton_animation_get_frames.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_get_frames.anim_name }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_list: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.skeleton_animation_list.sprite },
            { label: 'list', documentation: i18n.skeleton_animation_list.list }
        ],
        signature: '(sprite, list)'
    },
	skeleton_animation_mix: {
        description: '[Function]' + i18n.skeleton_animation_mix.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_from', documentation: i18n.skeleton_animation_mix.anim_from },
            { label: 'anim_to', documentation: i18n.skeleton_animation_mix.anim_to },
            { label: 'duration', documentation: i18n.skeleton_animation_mix.duration }
        ],
        signature: '(anim_from, anim_to, duration)'
    },
	skeleton_animation_set: {
        description: '[Function]' + i18n.skeleton_animation_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_set.anim_name }
        ],
        signature: '(anim_name)'
    },
	skeleton_animation_set_ext: {
        description: '[Function]' + i18n.skeleton_animation_set_ext.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'anim_name', documentation: i18n.skeleton_animation_set_ext.anim_name },
            { label: 'track', documentation: i18n.skeleton_animation_set_ext.track }
        ],
        signature: '(anim_name, track)'
    },
	skeleton_attachment_create: {
        description: '[Function]' + i18n.skeleton_attachment_create.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18nskeleton_attachment_create..name },
            { label: 'sprite', documentation: i18n.skeleton_attachment_create.sprite },
            { label: 'ind', documentation: i18n.skeleton_attachment_create.ind },
            { label: 'xo', documentation: i18n.skeleton_attachment_create.xo },
            { label: 'yo', documentation: i18n.skeleton_attachment_create.yo },
            { label: 'xs', documentation: i18n.skeleton_attachment_create.xs },
            { label: 'ys', documentation: i18n.skeleton_attachment_create.ys },
            { label: 'ro', documentation: i18n.skeleton_attachment_create.ro }
        ],
        signature: '(name, sprite, ind, xo, yo, xs, ys, ro)'
    },
	skeleton_attachment_get: {
        description: '[Function]' + i18n.skeleton_attachment_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'slot', documentation: i18n.skeleton_attachment_get.slot }
        ],
        signature: '(slot)'
    },
	skeleton_attachment_set: {
        description: '[Function]' + i18n.skeleton_attachment_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'slot', documentation: i18n.skeleton_attachment_set.slot },
            { label: 'attachment', documentation: i18n.skeleton_attachment_set.attachment }
        ],
        signature: '(slot, attachment)'
    },
	skeleton_bone_data_get: {
        description: '[Function]' + i18n.skeleton_bone_data_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_data_get.bone },
            { label: 'map', documentation: i18n.skeleton_bone_data_get.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_data_set: {
        description: '[Function]' + i18n.skeleton_bone_data_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_data_set.bone },
            { label: 'map', documentation: i18n.skeleton_bone_data_set.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_state_get: {
        description: '[Function]' + i18n.skeleton_bone_state_get.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_state_get.bone },
            { label: 'map', documentation: i18n.skeleton_bone_state_get.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_bone_state_set: {
        description: '[Function]' + i18n.skeleton_bone_state_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'bone', documentation: i18n.skeleton_bone_state_set.bone },
            { label: 'map', documentation: i18n.skeleton_bone_state_set.map }
        ],
        signature: '(bone, map)'
    },
	skeleton_collision_draw_set: {
        description: '[Function]' + i18n.skeleton_collision_draw_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n.skeleton_collision_draw_set.val }
        ],
        signature: '(val)'
    },
	skeleton_get_bounds: {
        description: '[Function]' + i18n.skeleton_get_bounds.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n.skeleton_get_bounds.index }
        ],
        signature: '(index)'
    },
	skeleton_get_minmax: {
        description: '[Function]' + i18n.skeleton_get_minmax.desc,
        available: datasimple.gms1
    },
	skeleton_get_num_bounds: {
        description: '[Function]' + i18n.skeleton_get_num_bounds.desc,
        available: datasimple.gms1
    },
	skeleton_skin_get: {
        description: '[Function]' + i18n.skeleton_skin_get.desc,
        available: datasimple.gms1
    },
	skeleton_skin_list: {
        description: '[Function]' + i18n.skeleton_skin_list.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.skeleton_skin_list.sprite },
            { label: 'list', documentation: i18n.skeleton_skin_list.list }
        ],
        signature: '(sprite, list)'
    },
	skeleton_skin_set: {
        description: '[Function]' + i18n.skeleton_skin_set.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'skin_name', documentation: i18n.skeleton_skin_set.skin_name }
        ],
        signature: '(skin_name)'
    },
	skeleton_slot_data: {
        description: '[Function]' + i18n.skeleton_slot_data.desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sprite', documentation: i18n.skeleton_slot_data.sprite },
            { label: 'list', documentation: i18n.skeleton_slot_data.list }
        ],
        signature: '(sprite, list)'
    },
	sprite_add: {
        description: '[Function]' + i18n.sprite_add.desc,
        available: datasimple.all,
        parameters: [
            { label: 'fname', documentation: i18n.sprite_add.fname },
            { label: 'imgnumb', documentation: i18n.sprite_add.imgnumb },
            { label: 'removeback', documentation: i18n.sprite_add.removeback },
            { label: 'smooth', documentation: i18n.sprite_add.smooth },
            { label: 'xorig', documentation: i18n.sprite_add.xorig },
            { label: 'yorig', documentation: i18n.sprite_add.yorig }
        ],
        signature: '(fname, imgnumb, removeback, smooth, xorig, yorig)'
    },
	sprite_add_from_surface: {
        description: '[Function]' + i18n.sprite_add_from_surface.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_add_from_surface.ind },
            { label: 'id', documentation: i18n.sprite_add_from_surface.id },
            { label: 'x', documentation: i18n.sprite_add_from_surface.x },
            { label: 'y', documentation: i18n.sprite_add_from_surface.y },
            { label: 'w', documentation: i18n.sprite_add_from_surface.w },
            { label: 'h', documentation: i18n.sprite_add_from_surface.h },
            { label: 'removeback', documentation: i18n.sprite_add_from_surface.removeback },
            { label: 'smooth', documentation: i18n.sprite_add_from_surface.smooth }
        ],
        signature: '(ind, id, x, y, w, h, removeback, smooth)'
    },
	sprite_assign: {
        description: '[Function]' + i18n.sprite_assign.desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n.sprite_assign.ind },
            { label: 'source', documentation: i18n.sprite_assign.source }
        ],
        signature: '(ind, source)'
    },
	sprite_collision_mask: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'sepmasks', documentation: i18n. },
            { label: 'bboxmode', documentation: i18n. },
            { label: 'bbleft', documentation: i18n. },
            { label: 'bbtop', documentation: i18n. },
            { label: 'bbright', documentation: i18n. },
            { label: 'bbbottom', documentation: i18n. },
            { label: 'kind', documentation: i18n..kind },
            { label: 'tolerance', documentation: i18n. }
        ],
        signature: '(ind, sepmasks, bboxmode, bbleft, bbtop, bbright, bbbottom, kind, tolerance)'
    },
	sprite_create_from_surface: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth },
            { label: 'xorig', documentation: i18n..xorig },
            { label: 'yorig', documentation: i18n..yorig }
        ],
        signature: '(id, x, y, w, h, removeback, smooth, xorig, yorig)'
    },
	sprite_delete: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_duplicate: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_exists: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_flush: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_flush_multi: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'indarray', documentation: i18n. }
        ],
        signature: '(indarray)'
    },
	sprite_get_bbox_bottom: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_left: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_right: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_bbox_top: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_name: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_number: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_texture: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n..spr },
            { label: 'subimg', documentation: i18n..subimg }
        ],
        signature: '(spr, subimg)'
    },
	sprite_get_tpe: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'index', documentation: i18n..index },
            { label: 'subindex', documentation: i18n. }
        ],
        signature: '(index, subindex)'
    },
	sprite_get_uvs: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'spr', documentation: i18n..spr },
            { label: 'subimg', documentation: i18n..subimg }
        ],
        signature: '(spr, subimg)'
    },
	sprite_get_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_xoffset: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_yoffset: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_merge: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind1', documentation: i18n. },
            { label: 'ind2', documentation: i18n. }
        ],
        signature: '(ind1, ind2)'
    },
	sprite_prefetch: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_prefetch_multi: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'indarray', documentation: i18n. }
        ],
        signature: '(indarray)'
    },
	sprite_replace: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname },
            { label: 'imgnumb', documentation: i18n..imgnumb },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth },
            { label: 'xorig', documentation: i18n..xorig },
            { label: 'yorig', documentation: i18n..yorig }
        ],
        signature: '(ind, fname, imgnumb, removeback, smooth, xorig, yorig)'
    },
	sprite_save: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'subimg', documentation: i18n..subimg },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(ind, subimg, fname)'
    },
	sprite_save_strip: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(ind, fname)'
    },
	sprite_set_alpha_from_sprite: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'spr', documentation: i18n..spr }
        ],
        signature: '(ind, spr)'
    },
	sprite_set_cache_size: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'max', documentation: i18n..max }
        ],
        signature: '(ind, max)'
    },
	sprite_set_cache_size_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'image', documentation: i18n. },
            { label: 'max', documentation: i18n..max }
        ],
        signature: '(ind, image, max)'
    },
	sprite_set_offset: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'xoff', documentation: i18n. },
            { label: 'yoff', documentation: i18n. }
        ],
        signature: '(ind, xoff, yoff)'
    },
	sqr: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n..x }
        ],
        signature: '(x)'
    },
	sqrt: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n..x }
        ],
        signature: '(x)'
    },
	steam_activate_overlay: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'overlayIndex', documentation: i18n. }
        ],
        signature: '(overlayIndex)'
    },
	steam_activate_overlay_browser: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n..url }
        ],
        signature: '(url)'
    },
	steam_activate_overlay_store: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'app_id', documentation: i18n. }
        ],
        signature: '(app_id)'
    },
	steam_activate_overlay_user: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dialog_name', documentation: i18n. },
            { label: 'steamid', documentation: i18n. }
        ],
        signature: '(dialog_name, steamid)'
    },
	steam_available_languages: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_clear_achievement: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ach_name', documentation: i18n. }
        ],
        signature: '(ach_name)'
    },
	steam_create_leaderboard: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'sort_method', documentation: i18n. },
            { label: 'display_type', documentation: i18n. }
        ],
        signature: '(lb_name, sort_method, display_type)'
    },
	steam_current_game_language: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_download_friends_scores: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. }
        ],
        signature: '(lb_name)'
    },
	steam_download_scores: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'start_idx', documentation: i18n. },
            { label: 'end_idx', documentation: i18n. }
        ],
        signature: '(lb_name, start_idx, end_idx)'
    },
	steam_download_scores_around_user: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'range_start', documentation: i18n. },
            { label: 'range_end', documentation: i18n. }
        ],
        signature: '(lb_name, range_start, range_end)'
    },
	steam_file_delete: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
	steam_file_exists: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
	steam_file_persisted: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
	steam_file_read: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
	steam_file_share: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
	steam_file_size: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
	steam_file_write: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'steam_filename', documentation: i18n. },
            { label: 'data', documentation: i18n..data },
            { label: 'size', documentation: i18n..size }
        ],
        signature: '(steam_filename, data, size)'
    },
	steam_file_write_file: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'steam_filename', documentation: i18n. },
            { label: 'local_filename', documentation: i18n. }
        ],
        signature: '(steam_filename, local_filename)'
    },
	steam_get_achievement: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ach_name', documentation: i18n. }
        ],
        signature: '(ach_name)'
    },
	steam_get_app_id: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_get_persona_name: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_get_quota_free: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_get_quota_total: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_get_stat_avg_rate: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n. }
        ],
        signature: '(stat_name)'
    },
	steam_get_stat_float: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n. }
        ],
        signature: '(stat_name)'
    },
	steam_get_stat_int: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n. }
        ],
        signature: '(stat_name)'
    },
	steam_get_user_account_id: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_get_user_persona_name: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'steam_id', documentation: i18n. }
        ],
        signature: '(steam_id)'
    },
	steam_get_user_steam_id: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_initialised: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_is_cloud_enabled_for_account: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_is_cloud_enabled_for_app: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_is_overlay_activated: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_is_overlay_enabled: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_is_screenshot_requested: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_is_user_logged_on: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_publish_workshop_file: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename },
            { label: 'previewImage', documentation: i18n. },
            { label: 'title', documentation: i18n..title },
            { label: 'description', documentation: i18n. }
        ],
        signature: '(filename, previewImage, title, description)'
    },
	steam_reset_all_stats: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_reset_all_stats_achievements: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_send_screenshot: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'filename', documentation: i18n..filename },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(filename, width, height)'
    },
	steam_set_achievement: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ach_name', documentation: i18n. }
        ],
        signature: '(ach_name)'
    },
	steam_set_stat_avg_rate: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n. },
            { label: 'session_count', documentation: i18n. },
            { label: 'session_length', documentation: i18n. }
        ],
        signature: '(stat_name, session_count, session_length)'
    },
	steam_set_stat_float: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n. },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(stat_name, value)'
    },
	steam_set_stat_int: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'stat_name', documentation: i18n. },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(stat_name, value)'
    },
	steam_stats_ready: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_ugc_create_item: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'consumer_app_id', documentation: i18n. },
            { label: 'file_type', documentation: i18n. }
        ],
        signature: '(consumer_app_id, file_type)'
    },
	steam_ugc_create_query_all: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'query_type', documentation: i18n. },
            { label: 'match_type', documentation: i18n. },
            { label: 'page', documentation: i18n. }
        ],
        signature: '(query_type, match_type, page)'
    },
	steam_ugc_create_query_all_ex: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'query_type', documentation: i18n. },
            { label: 'match_type', documentation: i18n. },
            { label: 'page', documentation: i18n. },
            { label: 'creator_app_id', documentation: i18n. },
            { label: 'consumer_app_id', documentation: i18n. }
        ],
        signature: '(query_type, match_type, page, creator_app_id, consumer_app_id)'
    },
	steam_ugc_create_query_user: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'list_type', documentation: i18n. },
            { label: 'match_type', documentation: i18n. },
            { label: 'sort_order', documentation: i18n. },
            { label: 'page', documentation: i18n. }
        ],
        signature: '(list_type, match_type, sort_order, page)'
    },
	steam_ugc_create_query_user_ex: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'list_type', documentation: i18n. },
            { label: 'match_type', documentation: i18n. },
            { label: 'sort_order', documentation: i18n. },
            { label: 'page', documentation: i18n. },
            { label: 'account_id', documentation: i18n. },
            { label: 'creator_app_id', documentation: i18n. },
            { label: 'consumer_app_id', documentation: i18n. }
        ],
        signature: '(list_type, match_type, sort_order, page, account_id, creator_app_id, consumer_app_id)'
    },
	steam_ugc_download: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_handle', documentation: i18n. },
            { label: 'dest_filename', documentation: i18n. }
        ],
        signature: '(ugc_handle, dest_filename)'
    },
	steam_ugc_get_item_install_info: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n. },
            { label: 'info_map', documentation: i18n. }
        ],
        signature: '(published_file_id, info_map)'
    },
	steam_ugc_get_item_update_info: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n. },
            { label: 'info_map', documentation: i18n. }
        ],
        signature: '(published_file_id, info_map)'
    },
	steam_ugc_get_item_update_progress: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'info_map', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, info_map)'
    },
	steam_ugc_get_subscribed_items: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'info_map', documentation: i18n. }
        ],
        signature: '(item_list)'
    },
	steam_ugc_num_subscribed_items: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	steam_ugc_query_add_excluded_tag: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'tag_name', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, tag_name)'
    },
	steam_ugc_query_add_required_tag: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'tag_name', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, tag_name)'
    },
	steam_ugc_query_set_allow_cached_response: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'max_age_seconds', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, max_age_seconds)'
    },
	steam_ugc_query_set_cloud_filename_filter: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'match_cloud_filename', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, match_cloud_filename)'
    },
	steam_ugc_query_set_match_any_tag: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'match_any_tag', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, match_any_tag)'
    },
	steam_ugc_query_set_ranked_by_trend_days: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'days', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, days)'
    },
	steam_ugc_query_set_return_long_description: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'return_long_desc', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, return_long_desc)'
    },
	steam_ugc_query_set_return_total_only: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'return_total_only', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, return_total_only)'
    },
	steam_ugc_query_set_search_text: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. },
            { label: 'search_text', documentation: i18n. }
        ],
        signature: '(ugc_query_handle, search_text)'
    },
	steam_ugc_request_item_details: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n. },
            { label: 'max_age_seconds', documentation: i18n. }
        ],
        signature: '(published_file_id, max_age_seconds)'
    },
	steam_ugc_send_query: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_query_handle', documentation: i18n. }
        ],
        signature: '(ugc_query_handle)'
    },
	steam_ugc_set_item_content: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'directory', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, directory)'
    },
	steam_ugc_set_item_description: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'description', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, description)'
    },
	steam_ugc_set_item_preview: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'image_path', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, image_path)'
    },
	steam_ugc_set_item_tags: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'tag_array', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, tag_array)'
    },
	steam_ugc_set_item_title: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'title', documentation: i18n..title }
        ],
        signature: '(ugc_update_handle, title)'
    },
	steam_ugc_set_item_visibility: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'visibility', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, visibility)'
    },
	steam_ugc_start_item_update: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'consumer_app_id', documentation: i18n. },
            { label: 'published_file_id', documentation: i18n. }
        ],
        signature: '(consumer_app_id, published_file_id)'
    },
	steam_ugc_submit_item_update: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ugc_update_handle', documentation: i18n. },
            { label: 'change_note', documentation: i18n. }
        ],
        signature: '(ugc_update_handle, change_note)'
    },
	steam_ugc_subscribe_item: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n. }
        ],
        signature: '(published_file_id)'
    },
	steam_ugc_unsubscribe_item: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'published_file_id', documentation: i18n. }
        ],
        signature: '(published_file_id)'
    },
	steam_upload_score: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'score', documentation: i18n. }
        ],
        signature: '(lb_name, score)'
    },
	steam_upload_score_buffer: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'score', documentation: i18n. },
            { label: 'buffer_id', documentation: i18n. }
        ],
        signature: '(lb_name, score, buffer_id)'
    },
	steam_upload_score_buffer_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'score', documentation: i18n. },
            { label: 'buffer_id', documentation: i18n. },
            { label: 'forceupdate', documentation: i18n. }
        ],
        signature: '(lb_name, score, buffer_id, forceupdate)'
    },
	steam_upload_score_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'lb_name', documentation: i18n. },
            { label: 'score', documentation: i18n. },
            { label: 'forceupdate', documentation: i18n. }
        ],
        signature: '(lb_name, score, forceupdate)'
    },
	steam_user_installed_dlc: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dlc_id', documentation: i18n. }
        ],
        signature: '(dlc_id)'
    },
	steam_user_owns_dlc: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'dlc_id', documentation: i18n. }
        ],
        signature: '(dlc_id)'
    },
	string: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n..val }
        ],
        signature: '(val)'
    },
	string_byte_at: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(str, index)'
    },
	string_byte_length: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_char_at: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(str, index)'
    },
	string_copy: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index },
            { label: 'count', documentation: i18n..count }
        ],
        signature: '(str, index, count)'
    },
	string_count: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'substr', documentation: i18n. },
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(substr, str)'
    },
	string_delete: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index },
            { label: 'count', documentation: i18n..count }
        ],
        signature: '(str, index, count)'
    },
	string_digits: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_format: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'val', documentation: i18n..val },
            { label: 'total', documentation: i18n. },
            { label: 'dec', documentation: i18n. }
        ],
        signature: '(val, total, dec)'
    },
	string_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n..string }
        ],
        signature: '(string)'
    },
	string_height_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n..string },
            { label: 'sep', documentation: i18n..sep },
            { label: 'w', documentation: i18n..w }
        ],
        signature: '(string, sep, w)'
    },
	string_insert: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'substr', documentation: i18n. },
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(substr, str, index)'
    },
	string_length: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_letters: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_lettersdigits: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_lower: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_ord_at: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(str, index)'
    },
	string_pos: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'substr', documentation: i18n. },
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(substr, str)'
    },
	string_repeat: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'count', documentation: i18n..count }
        ],
        signature: '(str, count)'
    },
	string_replace: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'substr', documentation: i18n. },
            { label: 'newstr', documentation: i18n. }
        ],
        signature: '(str, substr, newstr)'
    },
	string_replace_all: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'substr', documentation: i18n. },
            { label: 'newstr', documentation: i18n. }
        ],
        signature: '(str, substr, newstr)'
    },
	string_set_byte_at: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'index', documentation: i18n..index },
            { label: 'val', documentation: i18n..val }
        ],
        signature: '(str, index, val)'
    },
	string_upper: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	string_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n..string }
        ],
        signature: '(string)'
    },
	string_width_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'string', documentation: i18n..string },
            { label: 'sep', documentation: i18n..sep },
            { label: 'w', documentation: i18n..w }
        ],
        signature: '(string, sep, w)'
    },
	surface_copy: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'destination', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'source', documentation: i18n..source }
        ],
        signature: '(destination, x, y, source)'
    },
	surface_copy_part: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'destination', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'source', documentation: i18n..source },
            { label: 'xs', documentation: i18n..xs },
            { label: 'ys', documentation: i18n..ys },
            { label: 'ws', documentation: i18n. },
            { label: 'hs', documentation: i18n. }
        ],
        signature: '(destination, x, y, source, xs, ys, ws, hs)'
    },
	surface_create: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(w, h)'
    },
	surface_create_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(name, w, h)'
    },
	surface_exists: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	surface_free: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	surface_getpixel: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(id, x, y)'
    },
	surface_getpixel_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(id, x, y)'
    },
	surface_get_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	surface_get_texture: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	surface_get_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	surface_reset_target: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	surface_resize: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(id, width, height)'
    },
	surface_save: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(id, fname)'
    },
	surface_save_part: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'fname', documentation: i18n..fname },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(id, fname, x, y, w, h)'
    },
	surface_set_target: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	surface_set_target_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'index', documentation: i18n..index },
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(index, id)'
    },
	tan: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'radian_angle', documentation: i18n. }
        ],
        signature: '(radian_angle)'
    },
	texture_get_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'texid', documentation: i18n..texid }
        ],
        signature: '(texid)'
    },
	texture_get_texel_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'texture_id', documentation: i18n. }
        ],
        signature: '(texture_id)'
    },
	texture_get_texel_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'texture_id', documentation: i18n. }
        ],
        signature: '(texture_id)'
    },
	texture_get_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'texid', documentation: i18n..texid }
        ],
        signature: '(texid)'
    },
	texture_global_scale: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'pow2integer', documentation: i18n. }
        ],
        signature: '(pow2integer)'
    },
	texture_set_blending: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'blend', documentation: i18n. }
        ],
        signature: '(blend)'
    },
	texture_set_interpolation: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'linear', documentation: i18n. }
        ],
        signature: '(linear)'
    },
	texture_set_interpolation_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'linear', documentation: i18n. }
        ],
        signature: '(sampler_id, linear)'
    },
	texture_set_repeat: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'repeat', documentation: i18n. }
        ],
        signature: '(repeat)'
    },
	texture_set_repeat_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'repeat', documentation: i18n. }
        ],
        signature: '(sampler_id, repeat)'
    },
	texture_set_stage: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'texture_id', documentation: i18n. }
        ],
        signature: '(sampled_id, texture_id)'
    },
	timeline_add: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	timeline_clear: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	timeline_delete: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	timeline_exists: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	timeline_get_name: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	timeline_max_moment: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	timeline_moment_add_script: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'step', documentation: i18n. },
            { label: 'script', documentation: i18n. }
        ],
        signature: '(ind, step, script)'
    },
	timeline_moment_clear: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'step', documentation: i18n. }
        ],
        signature: '(ind, step)'
    },
	timeline_size: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	typeof: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'val', documentation: i18n..val }
        ],
        signature: '(val)'
    },
	url_get_domain: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	url_open: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n..url }
        ],
        signature: '(url)'
    },
	url_open_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n..url },
            { label: 'target', documentation: i18n. }
        ],
        signature: '(url, target)'
    },
	url_open_full: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'url', documentation: i18n..url },
            { label: 'target', documentation: i18n. },
            { label: 'options', documentation: i18n. }
        ],
        signature: '(url, target, options)'
    },
	vertex_argb: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'argb', documentation: i18n. }
        ],
        signature: '(vbuff, argb)'
    },
	vertex_begin: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'format', documentation: i18n. }
        ],
        signature: '(vbuff, format)'
    },
	vertex_color: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'color', documentation: i18n..color },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(vbuff, color, alpha)'
    },
	vertex_colour: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'colour', documentation: i18n..colour },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(vbuff, colour, alpha)'
    },
	vertex_create_buffer: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_create_buffer_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'size', documentation: i18n..size }
        ],
        signature: '(size)'
    },
	vertex_create_buffer_from_buffer: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src_buffer', documentation: i18n. },
            { label: 'format', documentation: i18n. }
        ],
        signature: '(src_buffer, format)'
    },
	vertex_create_buffer_from_buffer_ext: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'src_buffer', documentation: i18n. },
            { label: 'format', documentation: i18n. },
            { label: 'src_offset', documentation: i18n. },
            { label: 'num_vertices', documentation: i18n. }
        ],
        signature: '(src_buffer, format, src_offset, num_vertices)'
    },
	vertex_delete_buffer: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. }
        ],
        signature: '(vbuff)'
    },
	vertex_end: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. }
        ],
        signature: '(vbuff)'
    },
	vertex_float1: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'f1', documentation: i18n. }
        ],
        signature: '(vbuff, f1)'
    },
	vertex_float2: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'f1', documentation: i18n. },
            { label: 'f2', documentation: i18n. }
        ],
        signature: '(vbuff, f1, f2)'
    },
	vertex_float3: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'f1', documentation: i18n. },
            { label: 'f2', documentation: i18n. },
            { label: 'f3', documentation: i18n. }
        ],
        signature: '(vbuff, f1, f2, f3)'
    },
	vertex_float4: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'f1', documentation: i18n. },
            { label: 'f2', documentation: i18n. },
            { label: 'f3', documentation: i18n. },
            { label: 'f4', documentation: i18n. }
        ],
        signature: '(vbuff, f1, f2, f3, f4)'
    },
	vertex_format_add_color: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_add_colour: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_add_custom: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'type', documentation: i18n..type },
            { label: 'usage', documentation: i18n. }
        ],
        signature: '(type, usage)'
    },
	vertex_format_add_normal: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_add_position: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_add_position_3d: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_add_textcoord: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_begin: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_format_delete: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'format_id', documentation: i18n. }
        ],
        signature: '(format_id)'
    },
	vertex_format_end: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1
    },
	vertex_freeze: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. }
        ],
        signature: '(vbuff)'
    },
	vertex_get_buffer_size: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. }
        ],
        signature: '(vbuff)'
    },
	vertex_get_number: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. }
        ],
        signature: '(vbuff)'
    },
	vertex_normal: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. }
        ],
        signature: '(vbuff, nx, ny, nz)'
    },
	vertex_position: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(vbuff, x, y)'
    },
	vertex_position_3d: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(vbuff, x, y, z)'
    },
	vertex_submit: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'prim', documentation: i18n. },
            { label: 'texture', documentation: i18n. }
        ],
        signature: '(vbuff, prim, texture)'
    },
	vertex_texcoord: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'u', documentation: i18n. },
            { label: 'v', documentation: i18n..v }
        ],
        signature: '(vbuff, u, v)'
    },
	vertex_ubyte4: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'vbuff', documentation: i18n. },
            { label: 'b1', documentation: i18n. },
            { label: 'b2', documentation: i18n. },
            { label: 'b3', documentation: i18n. },
            { label: 'b4', documentation: i18n. }
        ],
        signature: '(vbuff, b1, b2, b3, b4)'
    },
	virtual_key_add: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'keycode', documentation: i18n. }
        ],
        signature: '(x, y, w, h, keycode)'
    },
	virtual_key_delete: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	virtual_key_hide: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	virtual_key_show: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	window_center: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_device: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_caption: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_color: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_colour: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_cursor: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_fullscreen: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_visible_rects: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 }
        ],
        signature: '(x1, y1, x2, y2)'
    },
	window_get_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_x: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_get_y: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_handle: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_has_focus: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_mouse_get_x: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_mouse_get_y: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_mouse_set: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(x, y)'
    },
	window_set_caption: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'caption', documentation: i18n. }
        ],
        signature: '(caption)'
    },
	window_set_color: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'color', documentation: i18n..color }
        ],
        signature: '(color)'
    },
	window_set_colour: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'colour', documentation: i18n..colour }
        ],
        signature: '(colour)'
    },
	window_set_cursor: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'curs', documentation: i18n. }
        ],
        signature: '(curs)'
    },
	window_set_fullscreen: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'full', documentation: i18n. }
        ],
        signature: '(full)'
    },
	window_set_max_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'maxheight', documentation: i18n. }
        ],
        signature: '(maxheight)'
    },
	window_set_max_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'maxwidth', documentation: i18n. }
        ],
        signature: '(maxwidth)'
    },
	window_set_min_height: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'minheight', documentation: i18n. }
        ],
        signature: '(minheight)'
    },
	window_set_min_width: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'minwidth', documentation: i18n. }
        ],
        signature: '(minwidth)'
    },
	window_set_position: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(x, y)'
    },
	window_set_rectangle: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(x, y, w, h)'
    },
	window_set_size: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(w, h)'
    },
	window_views_mouse_get_x: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_views_mouse_get_y: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all
    },
	window_view_mouse_get_x: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	window_view_mouse_get_y: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	zip_unzip: {
        description: '[Function]' + i18n..desc,
        available: datasimple.gms1,
        parameters: [
            { label: 'file', documentation: i18n..file },
            { label: 'destPath', documentation: i18n. }
        ],
        signature: '(file, destPath)'
    },

    //These are the functions that were obsoleted in the old version but restored in the new version
    variable_global_exists: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	variable_global_get: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	variable_global_set: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, value)'
    },
	variable_instance_exists: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n. },
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(instance_id, name)'
    },
	variable_instance_get: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n. },
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(instance_id, name)'
    },
	variable_instance_set: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n. },
            { label: 'name', documentation: i18n..name },
            { label: 'val', documentation: i18n..val }
        ],
        signature: '(instance_id, name, val)'
    },
	variable_instance_get_names: {
        description: '[Function]' + i18n..desc,
        available: datasimple.all,
        parameters: [
            { label: 'instance_id', documentation: i18n. }
        ],
        signature: '(instance_id)'
    },

    //These functions are deprecated.
    pocketchange_display_reward: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d
    },
	pocketchange_display_shop: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d
    },
	iap_store_status: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d
    },
	iap_product_status: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'product_id', documentation: i18n..product_id }
        ],
        signature: '(product_id)'
    },
	iap_is_downloaded: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'product_id_string', documentation: i18n. }
        ],
        signature: '(purchase_id_string)'
    },
	iap_files_purchased: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d
    },
	iap_product_files: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'product_id', documentation: i18n..product_id },
            { label: 'ds_list', documentation: i18n..ds_list }
        ],
        signature: '(purchase_id, ds_list)'
    },
	iap_event_queue: {
        description: '[Function] (' + i18n_notice.deprecated_2 + ')',
        available: datasimple.gms1d
    },
    win8_appbar_add_element: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'type', documentation: i18n..type },
            { label: 'icon', documentation: i18n. },
            { label: 'label', documentation: i18n. },
            { label: 'section', documentation: i18n..section },
            { label: 'toolTip', documentation: i18n. },
            { label: 'callback', documentation: i18n. }
        ],
        signature: '(type, icon, label, section, toolTip, callback)'
    },
	win8_appbar_enable: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'flag', documentation: i18n..flag }
        ],
        signature: '(flag)'
    },
	win8_appbar_remove_element: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	win8_device_touchscreen_available: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	win8_license_initialize_sandbox: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: '_licenseString', documentation: i18n. }
        ],
        signature: '(_licenseString)'
    },
	win8_license_trial_version: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	win8_livetile_badge_clear: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	win8_livetile_badge_notification: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	win8_livetile_notification_begin: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'template', documentation: i18n. }
        ],
        signature: '(template)'
    },
	win8_livetile_notification_end: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	win8_livetile_notification_expiry: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'expiryTime', documentation: i18n. }
        ],
        signature: '(expiryTime)'
    },
	win8_livetile_notification_image_add: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'image', documentation: i18n. }
        ],
        signature: '(image)'
    },
	win8_livetile_notification_secondary_begin: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'template', documentation: i18n. },
            { label: 'tileId', documentation: i18n. }
        ],
        signature: '(template, tileId)'
    },
	win8_livetile_notification_tag: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'tag', documentation: i18n. }
        ],
        signature: '(tag)'
    },
	win8_livetile_notification_text_add: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'text', documentation: i18n. }
        ],
        signature: '(text)'
    },
	win8_livetile_queue_enable: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'flag', documentation: i18n..flag }
        ],
        signature: '(flag)'
    },
	win8_livetile_tile_clear: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	win8_livetile_tile_notification: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'template', documentation: i18n. },
            { label: 'ds_map', documentation: i18n..ds_map },
            { label: 'expiry', documentation: i18n. },
            { label: 'tag', documentation: i18n. }
        ],
        signature: '(template, ds_map, expiry, tag)'
    },
	win8_search_add_suggestions: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: '_dslist', documentation: i18n. }
        ],
        signature: '(_dslist)'
    },
	win8_search_disable: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	win8_search_enable: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: '_selectionCallback', documentation: i18n. }
        ],
        signature: '(_selectionCallback)'
    },
	win8_secondarytile_badge_notification: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'tileId', documentation: i18n. }
        ],
        signature: '(id, tileId)'
    },
	win8_secondarytile_delete: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
	win8_secondarytile_pin: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'shortName', documentation: i18n. },
            { label: 'displayName', documentation: i18n. },
            { label: 'cmdLineArgs', documentation: i18n. },
            { label: 'dsListOptions', documentation: i18n. },
            { label: 'tileImg', documentation: i18n. },
            { label: 'wideTileImg', documentation: i18n. },
            { label: 'textCol', documentation: i18n. }
        ],
        signature: '(id, shortName, displayName, cmdLineArgs, dsListOptions, tileImg, wideTileImg, textCol)'
    },
	win8_settingscharm_add_entry: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'callback', documentation: i18n. }
        ],
        signature: '(name, callback)'
    },
	win8_settingscharm_add_html_entry: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'name', documentation: i18n..name },
            { label: 'htmlPath', documentation: i18n. }
        ],
        signature: '(id, name, htmlPath)'
    },
	win8_settingscharm_add_xaml_entry: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'xamlPath', documentation: i18n. },
            { label: 'headerRGB', documentation: i18n. },
            { label: 'callback', documentation: i18n. },
            { label: 'wideFlyout', documentation: i18n. }
        ],
        signature: '(name, xamlPath, headerRGB, callback, wideFlyout)'
    },
	win8_settingscharm_get_xaml_property: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'entryName', documentation: i18n. },
            { label: 'elementName', documentation: i18n. },
            { label: 'propertyName', documentation: i18n. }
        ],
        signature: '(entryName, elementName, propertyName)'
    },
	win8_settingscharm_remove_entry: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	win8_settingscharm_set_xaml_property: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'entryName', documentation: i18n. },
            { label: 'elementName', documentation: i18n. },
            { label: 'propertyName', documentation: i18n. },
            { label: 'newValue', documentation: i18n. }
        ],
        signature: '(entryName, elementName, propertyName, newValue)'
    },
	win8_share_file: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'filename', documentation: i18n..filename },
            { label: 'title', documentation: i18n..title },
            { label: 'description', documentation: i18n. },
            { label: 'immediate', documentation: i18n. }
        ],
        signature: '(filename, title, description, immediate)'
    },
	win8_share_image: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'image_filename', documentation: i18n. },
            { label: 'title', documentation: i18n..title },
            { label: 'description', documentation: i18n. },
            { label: 'immediate', documentation: i18n. }
        ],
        signature: '(image_filename, title, description, immediate)'
    },
	win8_share_screenshot: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'entryName', documentation: i18n. },
            { label: 'description', documentation: i18n. },
            { label: 'immediate', documentation: i18n. }
        ],
        signature: '(title, description, immediate)'
    },
	win8_share_text: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'text', documentation: i18n. },
            { label: 'title', documentation: i18n..title },
            { label: 'description', documentation: i18n. },
            { label: 'immediate', documentation: i18n. }
        ],
        signature: '(text, title, description, immediate)'
    },
	win8_share_url: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'url', documentation: i18n..url },
            { label: 'title', documentation: i18n..title },
            { label: 'description', documentation: i18n. },
            { label: 'immediate', documentation: i18n. }
        ],
        signature: '(url, title, description, immediate)'
    },
    winphone_license_trial_version: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d
    },
	winphone_tile_background_color: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        arameters: [
            { label: 'color', documentation: i18n..color }
        ],
        signature: '(color)'
    },
	winphone_tile_background_colour: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        arameters: [
            { label: 'colour', documentation: i18n..colour }
        ],
        signature: '(colour)'
    },
	winphone_tile_back_content: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'content', documentation: i18n..content }
        ],
        signature: '(content)'
    },
	winphone_tile_back_content_wide: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'content', documentation: i18n..content }
        ],
        signature: '(content)'
    },
	winphone_tile_back_image: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_back_image_wide: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_back_title: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'title', documentation: i18n..title }
        ],
        signature: '(title)'
    },
	winphone_tile_count: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'count', documentation: i18n..count }
        ],
        signature: '(count)'
    },
	winphone_tile_cycle_images: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename_1', documentation: i18n. },
            { label: 'included_filename_2', documentation: i18n. },
            { label: '...', documentation: i18n..more }
        ],
        signature: '(included_filename_1, included_filename_2, ...)'
    },
	winphone_tile_front_image: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_front_image_small: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_front_image_wide: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_icon_image: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_small_background_image: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_small_icon_image: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'included_filename', documentation: i18n. }
        ],
        signature: '(included_filename)'
    },
	winphone_tile_title: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'title', documentation: i18n..title }
        ],
        signature: '(title)'
    },
	winphone_tile_wide_content: {
        description: '[Function] (' + i18n_notice.deprecated_1 + ')',
        available: datasimple.gms1d,
        parameters: [
            { label: 'content', documentation: i18n..content },
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(content, index)'
    },

    //Obsolete functions in new GameMaker Studio and GameMaker Studio 2
    device_ios_get_image: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1
    },
	device_ios_get_imagename: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1
    },
    sound_delete: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    sound_discard: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    sound_exists: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    sound_get_kind: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sound_get_name: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sound_get_preload: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    sound_restore: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    sound_loop: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(index)'
    },
    sound_play: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(index)'
    },
    sound_stop: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(index)'
    },
	sound_stop_all: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
    },
	sound_volume: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n..index },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(index, value)'
    },
	sound_global_volume: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(value)'
    },
	sound_fade: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n..index },
            { label: 'value', documentation: i18n..value },
            { label: 'time', documentation: i18n..time }
        ],
        signature: '(index, value, time)'
    },
	sound_isplaying: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(index)'
    },
    audio_music_is_playing: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
    },
    audio_resume_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
    },
    audio_pause_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
    },
	audio_play_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'soundid', documentation: i18n..soundid },
            { label: 'loops', documentation: i18n. }
        ],
        signature: '(soundid, loops)'
    },
	audio_stop_music: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
    },
	audio_music_gain: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'value', documentation: i18n..value },
            { label: 'time', documentation: i18n..time }
        ],
        signature: '(value, time)'
    },
	ads_disable: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'num', documentation: i18n. }
        ],
		signature: '(num)'
	},
	ads_enable: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'num', documentation: i18n. }
        ],
		signature: '(x, y, num)'
	},
	ads_engagement_active: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
	},
	ads_engagement_available: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
	},
	ads_engagement_launch: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
	},
	ads_event: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'stringid', documentation: i18n. }
        ],
		signature: '(stringid)'
	},
	ads_event_preload: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'stringid', documentation: i18n. }
        ],
		signature: '(stringid)'
	},
	ads_get_display_height: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'slotnum', documentation: i18n. }
        ],
		signature: '(slotnum)'
	},
	ads_get_display_width: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'slotnum', documentation: i18n. }
        ],
		signature: '(slotnum)'
	},
	ads_interstitial_available: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
	},
	ads_interstitial_display: {
		description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1
	},
	ads_move: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'slotnum', documentation: i18n. }
        ],
		signature: '(x, y, slotnum)'},
	ads_setup: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'user_uuid', documentation: i18n. },
            { label: 'ad_app_key', documentation: i18n. }
        ],
		signature: '(user_uuid, ad_app_key)'
	},
	ads_set_reward_callback: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'callback', documentation: i18n. }
        ],
		signature: '(callback)'
	},
    playhaven_add_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'ident', documentation: i18n. }
        ],
        signature: '(x, y, w, h, ident)'
    },
	playhaven_hide_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'ident', documentation: i18n. }
        ],
        signature: '(x, y, w, h, ident)'
    },
	playhaven_position_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(x, y, w, h)'
    },
	playhaven_update_notification_badge: {
        description: '[Function] (' + i18n_notice.obsolete_new1_2 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(x, y, w, h)'
    },
    openfeint_accept_challenge: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1
    },
	openfeint_send_challenge: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'definition_string', documentation: i18n. },
            { label: 'text_string', documentation: i18n..text_string },
            { label: 'data_string', documentation: i18n. }
        ],
        signature: '(definition_string, text_string, data_string)'
    },
	openfeint_send_invite: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'definition_string', documentation: i18n. }
        ],
        signature: '(definition_string)'
    },
	openfeint_send_result: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'challenge_result', documentation: i18n. },
            { label: 'definition_string', documentation: i18n. }
        ],
        signature: '(challenge_result, description_string)'
    },
	openfeint_send_social: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'text_string', documentation: i18n..text_string },
            { label: 'suggested_message', documentation: i18n. },
            { label: 'image_name', documentation: i18n. }
        ],
        signature: '(text_string, suggested_message, image_name)'
    },
	openfeint_set_url: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'url', documentation: i18n..url }
        ],
        signature: '(url)'
    },
	openfeint_start: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1
    },
	achievement_map_achievement: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'gamecenter_string', documentation: i18n. },
            { label: 'openfeint_string', documentation: i18n. }
        ],
		signature: '(gamecenter_string, openfeint_string)'
	},
	achievement_map_leaderboard: {
        description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1,
        parameters: [
            { label: 'gamecenter_string', documentation: i18n. },
            { label: 'openfeint_string', documentation: i18n. },
            { label: 'leaderboard_type', documentation: i18n. }
        ],
		signature: '(gamecenter_string, openfeint_string, leaderboard_type)'
	},
	achievement_is_online: {
		description: '[Function] (' + i18n_notice.obsolete_new1 + ')',
        available: datasimple.ob1
	},

    //Obsolete functions in GameMaker Studio 2
    background_add: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth }
        ],
        signature: '(fname, removeback, smooth)'
    },
    background_assign: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'source', documentation: i18n..source }
        ],
        signature: '(ind, source)'
    },
    background_create_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(w, h, col)'
    },
    background_create_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(w, h, col)'
    },
    background_create_from_surface: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth }
        ],
        signature: '(id, x, y, w, h, removeback, smooth)'
    },
    background_create_gradient: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'col1', documentation: i18n..col1 },
            { label: 'col2', documentation: i18n..col2 },
            { label: 'kind', documentation: i18n..kind }
        ],
        signature: '(w, h, col1, col2, kind)'
    },
    background_delete: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_duplicate: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_exists: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_flush: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_flush_multi: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'indarray', documentation: i18n. }
        ],
        signature: '(indarray)'
    },
    background_get_height: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_get_name: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_get_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. }
        ],
        signature: '(back)'
    },
    background_get_uvs: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. }
        ],
        signature: '(back)'
    },
    background_get_width: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_prefetch: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    background_prefetch_multi: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'indarray', documentation: i18n. }
        ],
        signature: '(indarray)'
    },
    background_replace: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth }
        ],
        signature: '(ind, fname, removeback, smooth)'
    },
    background_replace_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(ind, fname)'
    },
    background_save: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(ind, fname)'
    },
    background_set_alpha_from_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'back', documentation: i18n. }
        ],
        signature: '(ind, back)'
    },
    draw_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(back, x, y)'
    },
    draw_background_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'xscale', documentation: i18n..xscale },
            { label: 'yscale', documentation: i18n..yscale },
            { label: 'rot', documentation: i18n..rot },
            { label: 'colour', documentation: i18n..colour },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(back, x, y, xscale, yscale, rot, colour, alpha)'
    },
    draw_background_general: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'xscale', documentation: i18n..xscale },
            { label: 'yscale', documentation: i18n..yscale },
            { label: 'rot', documentation: i18n..rot },
            { label: 'c1', documentation: i18n..c1 },
            { label: 'c2', documentation: i18n..c2 },
            { label: 'c3', documentation: i18n..c3 },
            { label: 'c4', documentation: i18n..c4 },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(back, left, top, width, height, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha)'
    },
    draw_background_part: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(back, left, top, width, height, x, y)'
    },
    draw_background_part_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'xscale', documentation: i18n..xscale },
            { label: 'yscale', documentation: i18n..yscale },
            { label: 'colour', documentation: i18n..colour },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(back, left, top, width, height, x, y, xscale, yscale, colour, alpha)'
    },
    draw_background_stretched: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(back, x, y, w, h)'
    },
    draw_background_stretched_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'colour', documentation: i18n..colour },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(back, x, y, w, h, colour, alpha)'
    },
    draw_background_tiled: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(back, x, y)'
    },
    draw_background_tiled_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'xscale', documentation: i18n..xscale },
            { label: 'yscale', documentation: i18n..yscale },
            { label: 'colour', documentation: i18n..colour },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(back, x, y, xscale, yscale, colour, alpha)'
    },
    room_set_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'bind', documentation: i18n. },
            { label: 'vis', documentation: i18n..vis },
            { label: 'fore', documentation: i18n. },
            { label: 'back', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'htiled', documentation: i18n. },
            { label: 'vtiled', documentation: i18n. },
            { label: 'hspeed', documentation: i18n. },
            { label: 'vspeed', documentation: i18n. },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, bind, vis, fore, back, x, y, htiled, vtiled, hspeed, vspeed, alpha)'
    },
    room_tile_add: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'back', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'hieght', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(ind, back, left, top, width, height, x, y, depth)'
    },
    room_tile_add_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'back', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'hieght', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'depth', documentation: i18n..depth },
            { label: 'xscale', documentation: i18n..xscale },
            { label: 'yscale', documentation: i18n..yscale },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, back, left, top, width, height, x, y, depth, xscale, yscale, alpha)'
    },
    room_tile_clear: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    tile_add: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'background', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(background, left, top, width, height, x, y, depth)'
    },
    tile_delete: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_exists: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_alpha: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_blend: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_count: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    tile_get_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_height: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_id: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(index)'
    },
    tile_get_ids: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    tile_get_ids_at_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(depth)'
    },
    tile_get_left: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_top: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_visible: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_width: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_x: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_xscale: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_y: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_get_yscale: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id }
        ],
        signature: '(id)'
    },
    tile_layer_delete: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(depth)'
    },
    tile_layer_delete_at: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(depth, x, y)'
    },
    tile_layer_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth },
            { label: 'newdepth', documentation: i18n. }
        ],
        signature: '(depth, newdepth)'
    },
    tile_layer_find: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(depth, x, y)'
    },
    tile_layer_hide: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(depth)'
    },
    tile_layer_shift: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(depth, x, y)'
    },
    tile_layer_show: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(depth)'
    },
    tile_set_alpha: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(id, alpha)'
    },
    tile_set_background: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'background', documentation: i18n. }
        ],
        signature: '(id, background)'
    },
    tile_set_blend: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'colour', documentation: i18n..colour }
        ],
        signature: '(id, colour)'
    },
    tile_set_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(id, depth)'
    },
    tile_set_position: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(id, x, y)'
    },
    tile_set_region: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(id, left, top, width, height)'
    },
    tile_set_scale: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'xscale', documentation: i18n..xscale },
            { label: 'yscale', documentation: i18n..yscale }
        ],
        signature: '(id, xscale, yscale)'
    },
    tile_set_visible: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'visible', documentation: i18n. }
        ],
        signature: '(id, visible)'
    },
    object_get_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    object_set_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(ind, depth)'
    },
    d3d_draw_block: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'texid', documentation: i18n..texid },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
    d3d_draw_cone: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'texid', documentation: i18n..texid },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. },
            { label: 'closed', documentation: i18n. },
            { label: 'steps', documentation: i18n. }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
    d3d_draw_cylinder: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'texid', documentation: i18n..texid },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. },
            { label: 'closed', documentation: i18n. },
            { label: 'steps', documentation: i18n. }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
    d3d_draw_ellipsoid: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'texid', documentation: i18n..texid },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. },
            { label: 'closed', documentation: i18n. },
            { label: 'steps', documentation: i18n. }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat, closed, steps)'
    },
    d3d_draw_floor: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'texid', documentation: i18n..texid },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
    d3d_draw_wall: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'texid', documentation: i18n..texid },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. }
        ],
        signature: '(x1, y1, z1, x2, y2, z2, texid, hrepeat, vrepeat)'
    },
    d3d_end: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_light_define_ambient: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(col)'
    },
    d3d_light_define_direction: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'dx', documentation: i18n. },
            { label: 'dy', documentation: i18n. },
            { label: 'dz', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(ind, dx, dy, dz, col)'
    },
    d3d_light_define_point: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'range', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(ind, x, y, z, range, col)'
    },
    d3d_light_enable: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(ind, enable)'
    },
    d3d_model_block: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
    d3d_model_clear: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    d3d_model_cone: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. },
            { label: 'closed', documentation: i18n. },
            { label: 'steps', documentation: i18n. }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, closed, steps)'
    },
    d3d_model_create: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_model_cylinder: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. },
            { label: 'closed', documentation: i18n. },
            { label: 'steps', documentation: i18n. }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, closed, steps)'
    },
    d3d_model_destroy: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_model_draw: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'texid', documentation: i18n..texid }
        ],
        signature: '(ind, x, y, z, texid)'
    },
    d3d_model_ellipsoid: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. },
            { label: 'closed', documentation: i18n. }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat, steps)'
    },
    d3d_model_floor: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
    d3d_model_load: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(ind, fname)'
    },
    d3d_model_primitive_begin: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'kind', documentation: i18n..kind }
        ],
        signature: '(ind, kind)'
    },
    d3d_model_primitive_end: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
    d3d_model_save: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname }
        ], 
        signature: '(ind, fname)'
    },
    d3d_model_vertex: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(ind, x, y, z)'
    },
    d3d_model_vertex_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, col, alpha)'
    },
    d3d_model_vertex_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, col, alpha)'
    },
    d3d_model_vertex_normal: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. }
        ],
        signature: '(ind, x, y, z, nx, ny, nz)'
    },
    d3d_model_vertex_normal_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_model_vertex_normal_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_model_vertex_normal_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex)'
    },
    d3d_model_vertex_normal_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_model_vertex_normal_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_model_vertex_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex }
        ],
        signature: '(ind, x, y, z, xtex, ytex)'
    },
    d3d_model_vertex_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, xtex, ytex, col, alpha)'
    },
    d3d_model_vertex_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(ind, x, y, z, xtex, ytex, col, alpha)'
    },
    d3d_model_wall: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x1', documentation: i18n..x1 },
            { label: 'y1', documentation: i18n..y1 },
            { label: 'z1', documentation: i18n..z1 },
            { label: 'x2', documentation: i18n..x2 },
            { label: 'y2', documentation: i18n..y2 },
            { label: 'z2', documentation: i18n..z2 },
            { label: 'hrepeat', documentation: i18n. },
            { label: 'vrepeat', documentation: i18n. }
        ],
        signature: '(ind, x1, y1, z1, x2, y2, z2, hrepeat, vrepeat)'
    },
    d3d_primitive_begin: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'kind', documentation: i18n..kind }
        ],
        signature: '(kind)'
    },
    d3d_primitive_begin_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'kind', documentation: i18n..kind },
            { label: 'texid', documentation: i18n..texid }
        ],
        signature: '(kind, texid)'
    },
    d3d_primitive_end: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_set_culling: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'cull', documentation: i18n. }
        ],
        signature: '(cull)'
    },
    d3d_set_depth: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(depth)'
    },
    d3d_set_fog: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n..enable },
            { label: 'colour', documentation: i18n..colour },
            { label: 'start', documentation: i18n. },
            { label: 'end', documentation: i18n. }
        ],
        signature: '(enable, colour, start, end)'
    },
    d3d_set_hidden: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'hidden', documentation: i18n. }
        ],
        signature: '(hidden)'
    },
    d3d_set_lighting: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
    d3d_set_perspective: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
    d3d_set_projection: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xform', documentation: i18n. },
            { label: 'yform', documentation: i18n. },
            { label: 'zform', documentation: i18n. },
            { label: 'xto', documentation: i18n. },
            { label: 'yto', documentation: i18n. },
            { label: 'zto', documentation: i18n. },
            { label: 'xup', documentation: i18n. },
            { label: 'yup', documentation: i18n. },
            { label: 'zup', documentation: i18n. }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)'
    },
    d3d_set_projection_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xform', documentation: i18n. },
            { label: 'yform', documentation: i18n. },
            { label: 'zform', documentation: i18n. },
            { label: 'xto', documentation: i18n. },
            { label: 'yto', documentation: i18n. },
            { label: 'zto', documentation: i18n. },
            { label: 'xup', documentation: i18n. },
            { label: 'yup', documentation: i18n. },
            { label: 'zup', documentation: i18n. },
            { label: 'angle', documentation: i18n..angle },
            { label: 'aspect', documentation: i18n. },
            { label: 'znear', documentation: i18n. },
            { label: 'zfar', documentation: i18n. }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup, angle, aspect, znear, zfar)'
    },
    d3d_set_projection_ortho: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(x, y, w, h, angle)'
    },
    d3d_set_projection_perspective: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(x, y, w, h, angle)'
    },
    d3d_set_shading: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'smooth', documentation: i18n..smooth }
        ],
        signature: '(smooth)'
    },
    d3d_set_zwriteenable: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'on_off', documentation: i18n. }
        ],
        signature: '(on_off)'
    },
    d3d_start: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_add_rotation_axis: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xa', documentation: i18n. },
            { label: 'ya', documentation: i18n. },
            { label: 'za', documentation: i18n. },
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(xa, ya, za, angle)'
    },
    d3d_transform_add_rotation_x: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_add_rotation_y: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_add_rotation_z: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_add_scaling: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xs', documentation: i18n..xs },
            { label: 'ys', documentation: i18n..ys },
            { label: 'zs', documentation: i18n. }
        ],
        signature: '(xs, ys, zs)'
    },
    d3d_transform_add_translation: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xt', documentation: i18n. },
            { label: 'yt', documentation: i18n. },
            { label: 'zt', documentation: i18n. }
        ],
        signature: '(xt, yt, zt)'
    },
    d3d_transform_set_identity: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_set_rotation_axis: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xa', documentation: i18n. },
            { label: 'ya', documentation: i18n. },
            { label: 'za', documentation: i18n. },
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(xa, ya, za, angle)'
    },
    d3d_transform_set_rotation_x: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_set_rotation_y: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_set_rotation_z: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
    d3d_transform_set_scaling: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xs', documentation: i18n..xs },
            { label: 'ys', documentation: i18n..ys },
            { label: 'zs', documentation: i18n. }
        ],
        signature: '(xs, ys, zs)'
    },
    d3d_transform_set_translation: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'xt', documentation: i18n. },
            { label: 'yt', documentation: i18n. },
            { label: 'zt', documentation: i18n. }
        ],
        signature: '(xt, yt, zt)'
    },
    d3d_transform_stack_clear: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_stack_discard: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_stack_empty: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_stack_pop: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_stack_push: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_stack_top: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    d3d_transform_vertex: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(x, y, z)'
    },
    d3d_vertex: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(x, y, z)'
    },
    d3d_vertex_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, col, alpha)'
    },
    d3d_vertex_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, col, alpha)'
    },
    d3d_vertex_normal: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. }
        ],
        signature: '(x, y, z, nx, ny, nz)'
    },
    d3d_vertex_normal_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_vertex_normal_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, col, alpha)'
    },
    d3d_vertex_normal_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex)'
    },
    d3d_vertex_normal_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_vertex_normal_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'nx', documentation: i18n. },
            { label: 'ny', documentation: i18n. },
            { label: 'nz', documentation: i18n. },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, nx, ny, nz, xtex, ytex, col, alpha)'
    },
    d3d_vertex_texture: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex }
        ],
        signature: '(x, y, z, xtex, ytex)'
    },
    d3d_vertex_texture_color: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, xtex, ytex, col, alpha)'
    },
    d3d_vertex_texture_colour: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'xtex', documentation: i18n..xtex },
            { label: 'ytex', documentation: i18n..ytex },
            { label: 'col', documentation: i18n..col },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(x, y, z, xtex, ytex, col, alpha)'
    },
    display_set_windows_vertex_buffer_method: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'method', documentation: i18n. }
        ],
        signature: '(method)'
    },
    display_get_windows_vertex_buffer_method: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    display_set_windows_alternate_sync: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
    display_get_windows_alternate_sync: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    room_set_view: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'vind', documentation: i18n. },
            { label: 'vis', documentation: i18n..vis },
            { label: 'xview', documentation: i18n. },
            { label: 'yview', documentation: i18n. },
            { label: 'wview', documentation: i18n. },
            { label: 'hview', documentation: i18n. },
            { label: 'xport', documentation: i18n. },
            { label: 'yport', documentation: i18n. },
            { label: 'wport', documentation: i18n. },
            { label: 'hport', documentation: i18n. },
            { label: 'hborder', documentation: i18n. },
            { label: 'vborder', documentation: i18n. },
            { label: 'hspeed', documentation: i18n. },
            { label: 'vspeed', documentation: i18n. },
            { label: 'obj', documentation: i18n..obj }
        ],
        signature: '(ind, vind, vis, xview, yview, wview, hview, xport, yport, wport, hport, hborder, vborder, hspeed, vspeed, obj)'
    },
    immersion_play_effect: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'effect', documentation: i18n. }
        ],
        signature: '(effect)'
    },
    immersion_stop: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2
    },
    analytics_event: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'string', documentation: i18n..string }
        ],
        signature: '(string)'
    },
    analytics_event_ext: {
        description: '[Function] (' + i18n_notice.obsolete_2 + ')',
        available: datasimple.ob2,
        parameters: [
            { label: 'string', documentation: i18n..string },
            { label: 'string_param_name1', documentation: i18n. },
            { label: 'number_value1', documentation: i18n. },
            { label: '...', documentation: i18n..more }
        ],
        signature: '(string, string_param_name1, number_value1, ...)'
    },

	//GameMaker 8.1 Only
	background_add_background: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(fname)'
    },
    background_create_from_screen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth }
        ],
        signature: '(x, y, w, h, removeback, smooth)'
    },
    cd_close_door: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_init: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    cd_length: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_number: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_open_door: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_pause: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_paused: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_play: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'first', documentation: i18n..first },
            { label: 'last', documentation: i18n..last }
        ],
        signature: '(first, last)'
    },
	cd_playing: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_present: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_resume: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_set_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'pos', documentation: i18n..pos }
        ],
        signature: '(pos)'
    },
	cd_set_track_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'pos', documentation: i18n..pos }
        ],
        signature: '(pos)'
    },
	cd_stop: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_track: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	cd_track_length: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'n', documentation: i18n..n }
        ],
        signature: '(n)'
    },
	cd_track_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    date_create_date: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'year', documentation: i18n. },
            { label: 'month', documentation: i18n. },
            { label: 'day', documentation: i18n. }
        ],
        signature: '(year, month, day)'
    },
    date_create_time: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'hour', documentation: i18n. },
            { label: 'minute', documentation: i18n. },
            { label: 'second', documentation: i18n. }
        ],
        signature: '(hour, minute, second)'
    },
	date_current_date: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    date_current_time: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    date_valid_date: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'year', documentation: i18n. },
            { label: 'month', documentation: i18n. },
            { label: 'day', documentation: i18n. }
        ],
        signature: '(year, month, day)'
    },
    date_valid_time: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'hour', documentation: i18n. },
            { label: 'minute', documentation: i18n. },
            { label: 'second', documentation: i18n. }
        ],
        signature: '(hour, minute, second)'
    },
    discard_include_file: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(fname)'
    },
	disk_free: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'drive', documentation: i18n. }
        ],
        signature: '(drive)'
    },
	disk_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'drive', documentation: i18n. }
        ],
        signature: '(drive)'
    },
	display_set_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'frequency', documentation: i18n. },
            { label: 'coldepth', documentation: i18n. }
        ],
        signature: '(w, h, frequency, coldepth)'
    },
	display_set_colordepth: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'coldepth', documentation: i18n. }
        ],
        signature: '(coldepth)'
    },
	display_set_frequency: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'frequency', documentation: i18n. }
        ],
        signature: '(frequency)'
    },
	display_set_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(w, h)'
    },
	display_test_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'frequency', documentation: i18n. },
            { label: 'coldepth', documentation: i18n. }
        ],
        signature: '(w, h, frequency, coldepth)'
    },
    execute_file: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'arg0', documentation: i18n..arg0 },
            { label: 'arg1', documentation: i18n..arg1 },
            { label: '...', documentation: i18n..more }
        ],
        signature: '(fname, arg0, arg1, ...)'
    },
    execute_program: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'arg', documentation: i18n. },
            { label: 'wait', documentation: i18n. }
        ],
        signature: '(prog, arg, wait)'
    },
	execute_shell: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'arg', documentation: i18n. }
        ],
        signature: '(prog, arg)'
    },
    execute_string: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'arg0', documentation: i18n..arg0 },
            { label: 'arg1', documentation: i18n..arg1 },
            { label: '...', documentation: i18n..more }
        ],
        signature: '(str, arg0, arg1, ...)'
    },
	export_include_file: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(fname)'
    },
	export_include_file_location: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'location', documentation: i18n. }
        ],
        signature: '(fname, location)'
    },
    get_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'defcol', documentation: i18n. }
        ],
        signature: '(defcol)'
    },
	get_directory: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'dname', documentation: i18n. }
        ],
        signature: '(dname)'
    },
	get_directory_alt: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'capt', documentation: i18n. },
            { label: 'root', documentation: i18n. }
        ],
        signature: '(capt, root)'
    },
    highscore_add_current: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    highscore_set_background: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'back', documentation: i18n. }
        ],
        signature: '(back)'
    },
	highscore_set_border: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n..show }
        ],
        signature: '(show)'
    },
	highscore_set_colors: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'back', documentation: i18n. },
            { label: 'new', documentation: i18n. },
            { label: 'other', documentation: i18n. }
        ],
        signature: '(back, new, other)'
    },
	highscore_set_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'size', documentation: i18n..size },
            { label: 'style', documentation: i18n. }
        ],
        signature: '(name, size, style)'
    },
	highscore_set_strings: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'caption', documentation: i18n. },
            { label: 'nobody', documentation: i18n. },
            { label: 'escape', documentation: i18n. }
        ],
        signature: '(caption, nobody, escape)'
    },
	highscore_show: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'numb', documentation: i18n..numb }
        ],
        signature: '(numb)'
    },
	highscore_show_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'numb', documentation: i18n..numb },
            { label: 'back', documentation: i18n. },
            { label: 'border', documentation: i18n. },
            { label: 'col1', documentation: i18n..col1 },
            { label: 'col2', documentation: i18n..col2 },
            { label: 'name', documentation: i18n..name },
            { label: 'size', documentation: i18n..size }
        ],
        signature: '(numb, back, border, col1, col2, name, size)'
    },
    io_handle: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    keyboard_wait: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	MCI_command: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	message_alpha: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(alpha)'
    },
	message_background: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'back', documentation: i18n. }
        ],
        signature: '(back)'
    },
	message_button: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(sprite)'
    },
	message_button_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'size', documentation: i18n..size },
            { label: 'colour', documentation: i18n..colour },
            { label: 'style', documentation: i18n. }
        ],
        signature: '(name, size, colour, style)'
    },
	message_caption: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n..show },
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(show, str)'
    },
	message_input_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(col)'
    },
	message_input_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'size', documentation: i18n..size },
            { label: 'colour', documentation: i18n..colour },
            { label: 'style', documentation: i18n. }
        ],
        signature: '(name, size, colour, style)'
    },
	message_mouse_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(col)'
    },
	message_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(x, y)'
    },
	message_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(w, h)'
    },
	message_text_charset: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'type', documentation: i18n..type },
            { label: 'charset_id', documentation: i18n. }
        ],
        signature: '(type, charset_id)'
    },
	message_text_font: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'size', documentation: i18n..size },
            { label: 'colour', documentation: i18n..colour },
            { label: 'style', documentation: i18n. }
        ],
        signature: '(name, size, colour, style)'
    },
    mouse_wait: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    object_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	object_delete: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	object_event_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'evtype', documentation: i18n. },
            { label: 'evnumb', documentation: i18n. },
            { label: 'codestr', documentation: i18n. }
        ],
        signature: '(ind, evtype, evnumb, codestr)'
    },
	object_event_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'evtype', documentation: i18n. },
            { label: 'evnumb', documentation: i18n. }
        ],
        signature: '(ind, evtype, evnumb)'
    },
	part_attractor_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_attractor_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_attractor_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_attractor_force: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'force', documentation: i18n. },
            { label: 'dist', documentation: i18n. },
            { label: 'kind', documentation: i18n..kind },
            { label: 'additive', documentation: i18n..additive }
        ],
        signature: '(ps, ind, force, dist, kind, additive)'
    },
	part_attractor_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(ps, ind, x, y)'
    },
	part_changer_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_changer_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_changer_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_changer_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_changer_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_changer_kind: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'kind', documentation: i18n..kind }
        ],
        signature: '(ps, ind, kind)'
    },
	part_changer_region: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'xmin', documentation: i18n..xmin },
            { label: 'xmax', documentation: i18n..xmax },
            { label: 'ymin', documentation: i18n..ymin },
            { label: 'ymax', documentation: i18n..ymax },
            { label: 'shape', documentation: i18n..shape }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape)'
    },
	part_changer_types: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'parttype1', documentation: i18n. },
            { label: 'parttype2', documentation: i18n. }
        ],
        signature: '(ps, ind, parttype1, parttype2)'
    },
	part_deflector_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_deflector_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_deflector_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_deflector_friction: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'amount', documentation: i18n..amount }
        ],
        signature: '(ps, ind, amount)'
    },
	part_deflector_kind: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'kind', documentation: i18n..kind }
        ],
        signature: '(ps, ind, kind)'
    },
	part_deflector_region: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'xmin', documentation: i18n..xmin },
            { label: 'xmax', documentation: i18n..xmax },
            { label: 'ymin', documentation: i18n..ymin },
            { label: 'ymax', documentation: i18n..ymax }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax)'
    },
	part_destroyer_clear: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_create: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_destroyer_destroy: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_destroy_all: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps }
        ],
        signature: '(ps)'
    },
	part_destroyer_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ps, ind)'
    },
	part_destroyer_region: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ps', documentation: i18n..ps },
            { label: 'ind', documentation: i18n..ind },
            { label: 'xmin', documentation: i18n..xmin },
            { label: 'xmax', documentation: i18n..xmax },
            { label: 'ymin', documentation: i18n..ymin },
            { label: 'ymax', documentation: i18n..ymax },
            { label: 'shape', documentation: i18n..shape }
        ],
        signature: '(ps, ind, xmin, xmax, ymin, ymax, shape)'
    },
    registry_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	registry_exists_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n..key },
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(key, name)'
    },
	registry_read_real: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	registry_read_real_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n..key },
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(key, name)'
    },
	registry_read_string: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	registry_read_string_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n..key },
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(key, name)'
    },
	registry_set_root: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'root', documentation: i18n. }
        ],
        signature: '(root)'
    },
	registry_write_real: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, value)'
    },
	registry_write_real_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n..key },
            { label: 'name', documentation: i18n..name },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(key, name, value)'
    },
	registry_write_string: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(name, str)'
    },
	registry_write_string_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'key', documentation: i18n..key },
            { label: 'name', documentation: i18n..name },
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(key, name, str)'
    },
    room_set_caption: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(ind, str)'
    },
	room_set_code: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'codestr', documentation: i18n. }
        ],
        signature: '(ind, codestr)'
    },
    screen_redraw: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    screen_refresh: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    screen_wait_vsync: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    script_get_text: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	set_application_title: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'title', documentation: i18n..title }
        ],
        signature: '(title)'
    },
	set_automatic_draw: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(value)'
    },
	set_program_priority: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'priority', documentation: i18n..priority }
        ],
        signature: '(priority)'
    },
	set_synchronization: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(value)'
    },
    show_menu: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'def', documentation: i18n..def }
        ],
        signature: '(str, def)'
    },
	show_menu_pos: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'str', documentation: i18n..str },
            { label: 'def', documentation: i18n..def }
        ],
        signature: '(x, y, str, def)'
    },
    show_message_ext: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'str', documentation: i18n..str },
            { label: 'but1', documentation: i18n. },
            { label: 'but2', documentation: i18n. },
            { label: 'but3', documentation: i18n. }
        ],
        signature: '(str, but1, but2, but3)'
    },
    sleep: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'millisec', documentation: i18n. }
        ],
        signature: '(millisec)'
    },
	sound_3d_set_sound_cone: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'anglein', documentation: i18n. },
            { label: 'angleout', documentation: i18n. },
            { label: 'voloutside', documentation: i18n. }
        ],
        signature: '(snd, x, y, z, anglein, angleout, voloutside)'
    },
	sound_3d_set_sound_distance: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'mindist', documentation: i18n. },
            { label: 'maxdist', documentation: i18n..maxdist }
        ],
        signature: '(snd, mindist, maxdist)'
    },
	sound_3d_set_sound_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(snd, x, y, z)'
    },
	sound_3d_set_sound_velocity: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(snd, x, y, z)'
    },
	sound_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'kind', documentation: i18n..kind },
            { label: 'preload', documentation: i18n. }
        ],
        signature: '(fname, kind, preload)'
    },
	sound_background_tempo: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'factor', documentation: i18n..factor }
        ],
        signature: '(factor)'
    },
	sound_effect_chorus: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'wetdry', documentation: i18n. },
            { label: 'depth', documentation: i18n..depth },
            { label: 'feedback', documentation: i18n. },
            { label: 'frequency', documentation: i18n. },
            { label: 'wave', documentation: i18n. },
            { label: 'delay', documentation: i18n. },
            { label: 'phase', documentation: i18n. }
        ],
        signature: '(snd, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
	sound_effect_compressor: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'gain', documentation: i18n. },
            { label: 'attack', documentation: i18n. },
            { label: 'release', documentation: i18n. },
            { label: 'threshold', documentation: i18n. },
            { label: 'ratio', documentation: i18n..ratio },
            { label: 'delay', documentation: i18n. }
        ],
        signature: '(snd, gain, attack, release, threshold, ratio, delay)'
    },
	sound_effect_echo: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'wetdry', documentation: i18n. },
            { label: 'feedback', documentation: i18n. },
            { label: 'leftdelay', documentation: i18n. },
            { label: 'rightdelay', documentation: i18n. },
            { label: 'pandelay', documentation: i18n. }
        ],
        signature: '(snd, wetdry, feedback, leftdelay, rightdelay, pandelay)'
    },
	sound_effect_equalizer: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'center', documentation: i18n. },
            { label: 'bandwidth', documentation: i18n. },
            { label: 'gain', documentation: i18n. }
        ],
        signature: '(snd, center, bandwidth, gain)'
    },
	sound_effect_flanger: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'wetdry', documentation: i18n. },
            { label: 'depth', documentation: i18n..depth },
            { label: 'feedback', documentation: i18n. },
            { label: 'frequency', documentation: i18n. },
            { label: 'wave', documentation: i18n. },
            { label: 'delay', documentation: i18n. },
            { label: 'phase', documentation: i18n. }
        ],
        signature: '(snd, wetdry, depth, feedback, frequency, wave, delay, phase)'
    },
	sound_effect_gargle: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'rate', documentation: i18n. },
            { label: 'wave', documentation: i18n. }
        ],
        signature: '(snd, rate, wave)'
    },
	sound_effect_reverb: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'gain', documentation: i18n. },
            { label: 'mix', documentation: i18n. },
            { label: 'time', documentation: i18n..time },
            { label: 'ratio', documentation: i18n..ratio }
        ],
        signature: '(snd, gain, mix, time, ratio)'
    },
	sound_effect_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'snd', documentation: i18n. },
            { label: 'effect', documentation: i18n. }
        ],
        signature: '(snd, effect)'
    },
	sound_pan: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'index', documentation: i18n..index },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(index, value)'
    },
	sound_replace: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname },
            { label: 'kind', documentation: i18n..kind },
            { label: 'preload', documentation: i18n. }
        ],
        signature: '(ind, fname, kind, preload)'
    },
	sound_set_search_directory: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'dir', documentation: i18n..dir }
        ],
        signature: '(dir)'
    },
	splash_set_adapt: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'adapt', documentation: i18n. }
        ],
        signature: '(adapt)'
    },
	splash_set_border: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'border', documentation: i18n. }
        ],
        signature: '(border)'
    },
	splash_set_caption: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'cap', documentation: i18n. }
        ],
        signature: '(cap)'
    },
	splash_set_close_button: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n..show }
        ],
        signature: '(show)'
    },
	splash_set_color: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(col)'
    },
	splash_set_cursor: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'vis', documentation: i18n..vis }
        ],
        signature: '(vis)'
    },
	splash_set_fullscreen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'full', documentation: i18n. }
        ],
        signature: '(full)'
    },
	splash_set_interrupt: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'interrupt', documentation: i18n. }
        ],
        signature: '(interrupt)'
    },
	splash_set_main: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'main', documentation: i18n. }
        ],
        signature: '(main)'
    },
	splash_set_position: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(x, y)'
    },
	splash_set_scale: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'scale', documentation: i18n..scale }
        ],
        signature: '(scale)'
    },
	splash_set_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h }
        ],
        signature: '(w, h)'
    },
	splash_set_stop_key: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'stop', documentation: i18n. }
        ],
        signature: '(stop)'
    },
	splash_set_stop_mouse: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'stop', documentation: i18n. }
        ],
        signature: '(stop)'
    },
	splash_set_top: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        arameters: [
            { label: 'top', documentation: i18n..top }
        ],
        signature: '(top)'
    },
	splash_show_image: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'delay', documentation: i18n. }
        ],
        signature: '(fname, delay)'
    },
	splash_show_text: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'delay', documentation: i18n. }
        ],
        signature: '(fname, delay)'
    },
	splash_show_video: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname },
            { label: 'loop', documentation: i18n..loop }
        ],
        signature: '(fname, loop)'
    },
	splash_show_web: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'url', documentation: i18n..url },
            { label: 'delay', documentation: i18n. }
        ],
        signature: '(url, delay)'
    },
    sprite_add_from_screen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth }
        ],
        signature: '(ind, x, y, w, h, removeback, smooth)'
    },
    sprite_add_sprite: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(fname)'
    },
    sprite_create_from_screen: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'removeback', documentation: i18n..removeback },
            { label: 'smooth', documentation: i18n..smooth },
            { label: 'xorig', documentation: i18n..xorig },
            { label: 'yorig', documentation: i18n..yorig }
        ],
        signature: '(x, y, w, h, removeback, smooth, xorig, yorig)'
    },
    sprite_replace_sprite: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(ind, fname)'
    },
    timeline_moment_add: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'step', documentation: i18n. },
            { label: 'codestr', documentation: i18n. }
        ],
        signature: '(ind, step, codestr)'
    },
    transition_define: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'kind', documentation: i18n..kind },
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(kind, name)'
    },
	transition_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'kind', documentation: i18n..kind }
        ],
        signature: '(kind)'
    },
	variable_global_array2_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind1', documentation: i18n. },
            { label: 'ind2', documentation: i18n. }
        ],
        signature: '(name, ind1, ind2)'
    },
	variable_global_array2_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind1', documentation: i18n. },
            { label: 'ind2', documentation: i18n. },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, ind1, ind2, value)'
    },
	variable_global_array_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(name, ind)'
    },
	variable_global_array_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind', documentation: i18n..ind },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, ind, value)'
    },
    variable_local_array2_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind1', documentation: i18n. },
            { label: 'ind2', documentation: i18n. }
        ],
        signature: '(name, ind1, ind2)'
    },
	variable_local_array2_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind1', documentation: i18n. },
            { label: 'ind2', documentation: i18n. },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, ind1, ind2, value)'
    },
	variable_local_array_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(name, ind)'
    },
	variable_local_array_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'ind', documentation: i18n..ind },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, ind, value)'
    },
	variable_local_exists: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	variable_local_get: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name }
        ],
        signature: '(name)'
    },
	variable_local_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'name', documentation: i18n..name },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(name, value)'
    },
    window_default: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    window_get_region_height: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	window_get_region_scale: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	window_get_region_width: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	window_get_showborder: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	window_get_showicons: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	window_get_sizeable: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
	window_get_stayontop: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    window_get_visible: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    window_set_region_scale: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'scale', documentation: i18n..scale },
            { label: 'adaptwindow', documentation: i18n. }
        ],
        signature: '(scale, adaptwindow)'
    },
	window_set_region_size: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'w', documentation: i18n..w },
            { label: 'h', documentation: i18n..h },
            { label: 'adaptwindow', documentation: i18n. }
        ],
        signature: '(w, h, adaptwindow)'
    },
	window_set_showborder: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n..show }
        ],
        signature: '(show)'
    },
	window_set_showicons: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'show', documentation: i18n..show }
        ],
        signature: '(show)'
    },
	window_set_sizeable: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'sizeable', documentation: i18n. }
        ],
        signature: '(sizeable)'
    },
	window_set_stayontop: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'stay', documentation: i18n. }
        ],
        signature: '(stay)'
    },
	window_set_visible: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'visible', documentation: i18n. }
        ],
        signature: '(visible)'
    },
	window_views_mouse_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(x, y)'
    },
	window_view_mouse_set: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(id, x, y)'
    },
    texture_preload: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'texid', documentation: i18n..texid }
        ],
        signature: '(texid)'
    },
    texture_set_priority: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'texid', documentation: i18n..texid },
            { label: 'prio', documentation: i18n. }
        ],
        signature: '(texid, prio)'
    },
    display_get_colourdepth: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    display_get_frequency: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    show_info: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81
    },
    load_info: {
        description: '[Function] (' + i18n_notice.gm_81 + ')',
        available: datasimple.gm81,
        parameters: [
            { label: 'fname', documentation: i18n..fname }
        ],
        signature: '(fname)'
    },

	//New in GameMaker Studio 2
	string_hash_to_newline: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'str', documentation: i18n..str }
        ],
        signature: '(str)'
    },
	game_set_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'value', documentation: i18n..value },
            { label: 'type', documentation: i18n..type }
        ],
        signature: '(value, type)'
    },
	game_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'type', documentation: i18n..type }
        ],
        signature: '(type)'
    },
	sprite_set_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'speed', documentation: i18n..speed },
            { label: 'type', documentation: i18n..type }
        ],
        signature: '(ind, speed, type)'
    },
	sprite_get_speed_type: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	sprite_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	texture_get_uvs: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'texid', documentation: i18n..texid }
        ],
        signature: '(texid)'
    },
	room_get_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'vind', documentation: i18n. }
        ],
        signature: '(ind, vind)'
    },
	room_set_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'vind', documentation: i18n. },
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(ind, vind, camera)'
    },
	room_set_viewport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'vind', documentation: i18n. }
        ],
        signature: '(ind, vind)'
    },
	room_get_viewport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'vind', documentation: i18n. },
            { label: 'vis', documentation: i18n..vis },
            { label: 'xport', documentation: i18n. },
            { label: 'yport', documentation: i18n. },
            { label: 'wport', documentation: i18n. },
            { label: 'hport', documentation: i18n. }
        ],
        signature: '(ind, vind, vis, xport, yport, wport, hport)'
    },
	ds_list_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'pos', documentation: i18n..pos },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(id, pos, value)'
    },
	ds_map_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'id', documentation: i18n..id },
            { label: 'key', documentation: i18n..key },
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(id, key, value)'
    },
	part_system_create_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer', documentation: i18n. },
            { label: 'persistent', documentation: i18n. }
        ],
        signature: '(layer, persistent)'
    },
	part_system_get_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	part_system_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'layer', documentation: i18n. }
        ],
        signature: '(ind, layer)'
    },
	matrix_build_identity: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	matrix_build_lookat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'xform', documentation: i18n. },
            { label: 'yform', documentation: i18n. },
            { label: 'zform', documentation: i18n. },
            { label: 'xto', documentation: i18n. },
            { label: 'yto', documentation: i18n. },
            { label: 'zto', documentation: i18n. },
            { label: 'xup', documentation: i18n. },
            { label: 'yup', documentation: i18n. },
            { label: 'zup', documentation: i18n. }
        ],
        signature: '(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup)'
    },
	matrix_build_projection_ortho: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'znear', documentation: i18n. },
            { label: 'zfar', documentation: i18n. }
        ],
        signature: '(width, height, znear, zfar)'
    },
	matrix_build_projection_perspective: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'znear', documentation: i18n. },
            { label: 'zfar', documentation: i18n. }
        ],
        signature: '(width, height, znear, zfar)'
    },
	matrix_build_projection_perspective_fov: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'fov_y', documentation: i18n. },
            { label: 'height', documentation: i18n..height },
            { label: 'znear', documentation: i18n. },
            { label: 'zfar', documentation: i18n. }
        ],
        signature: '(fov_y, aspect, znear, zfar)'
    },
	matrix_transform_vertex: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'matrix', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z }
        ],
        signature: '(matrix, x, y, z)'
    },
	matrix_stack_push: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: '...', documentation: i18n..more }
        ],
        signature: '(...)'
    },
	matrix_stack_pop: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	matrix_stack_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'matrix', documentation: i18n. }
        ],
        signature: '(matrix)'
    },
	matrix_stack_clear: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	matrix_stack_top: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	matrix_stack_is_empty: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_set_blendenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	gpu_set_ztestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	gpu_set_zfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	gpu_set_zwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	gpu_set_fog: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable },
            { label: 'col', documentation: i18n..col },
            { label: 'start', documentation: i18n. },
            { label: 'end', documentation: i18n. }
        ],
        signature: '(enable, col, start, end)'
    },
	gpu_set_cullmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'cullmode', documentation: i18n. }
        ],
        signature: '(cullmode)'
    },
	gpu_set_blendmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'mode', documentation: i18n..mode }
        ],
        signature: '(mode)'
    },
	gpu_set_blendmode_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'src', documentation: i18n..src },
            { label: 'dest', documentation: i18n..dest }
        ],
        signature: '(src, dest)'
    },
	gpu_set_blendmode_ext_sepalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'src', documentation: i18n..src },
            { label: 'dest', documentation: i18n..dest },
            { label: 'srcalpha', documentation: i18n. },
            { label: 'destalpha', documentation: i18n. }
        ],
        signature: '(src, dest, srcalpha, destalpha)'
    },
	gpu_set_colorwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'red', documentation: i18n..red },
            { label: 'green', documentation: i18n..green },
            { label: 'blue', documentation: i18n..blue },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	gpu_set_colourwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'red', documentation: i18n..red },
            { label: 'green', documentation: i18n..green },
            { label: 'blue', documentation: i18n..blue },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(red, green, blue, alpha)'
    },
	gpu_set_alphatestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	gpu_set_alphatestref: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'value', documentation: i18n..value }
        ],
        signature: '(value)'
    },
	gpu_set_alphatestfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'cmp_func', documentation: i18n. }
        ],
        signature: '(cmp_func)'
    },
	gpu_set_texfilter: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'linear', documentation: i18n. }
        ],
        signature: '(linear)'
    },
	gpu_set_texfilter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'linear', documentation: i18n. }
        ],
        signature: '(sampler_id, linear)'
    },
	gpu_set_texrepeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'repeat', documentation: i18n. }
        ],
        signature: '(repeat)'
    },
	gpu_set_texrepeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'repeat', documentation: i18n. }
        ],
        signature: '(sampler_id, repeat)'
    },
	gpu_set_tex_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'linear', documentation: i18n. }
        ],
        signature: '(linear)'
    },
	gpu_set_tex_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'linear', documentation: i18n. }
        ],
        signature: '(sampler_id, linear)'
    },
	gpu_set_tex_repeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'repeat', documentation: i18n. }
        ],
        signature: '(repeat)'
    },
	gpu_set_tex_repeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'repeat', documentation: i18n. }
        ],
        signature: '(sampler_id, repeat)'
    },
	gpu_set_tex_mip_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'filter', documentation: i18n..filter }
        ],
        signature: '(filter)'
    },
	gpu_set_tex_mip_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'filter', documentation: i18n..filter }
        ],
        signature: '(sampler_id, filter)'
    },
	gpu_set_tex_mip_bias: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'bias', documentation: i18n. }
        ],
        signature: '(bias)'
    },
	gpu_set_tex_mip_bias_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'bias', documentation: i18n. }
        ],
        signature: '(sampler_id, bias)'
    },
	gpu_set_tex_min_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'minmap', documentation: i18n. }
        ],
        signature: '(minmip)'
    },
	gpu_set_tex_min_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'minmip', documentation: i18n. }
        ],
        signature: '(sampler_id, minmip)'
    },
	gpu_set_tex_max_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'maxmap', documentation: i18n. }
        ],
        signature: '(maxmip)'
    },
	gpu_set_tex_max_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'maxmap', documentation: i18n. }
        ],
        signature: '(sampler_id, maxmip)'
    },
	gpu_set_tex_max_aniso: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'maxaniso', documentation: i18n. }
        ],
        signature: '(maxaniso)'
    },
	gpu_set_tex_max_aniso_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'maxaniso', documentation: i18n. }
        ],
        signature: '(sampler_id, maxaniso)'
    },
	gpu_set_tex_mip_enable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'setting', documentation: i18n. }
        ],
        signature: '(setting)'
    },
	gpu_set_tex_mip_enable_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. },
            { label: 'setting', documentation: i18n. }
        ],
        signature: '(sampler_id, setting)'
    },
	gpu_get_blendenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_ztestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_zfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_zwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_fog: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_cullmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode_ext_sepalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode_src: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode_dest: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode_srcalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_blendmode_destalpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_colorwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_colourwriteenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_alphatestenable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_alphatestref: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_alphatestfunc: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_texfilter: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_texfilter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_texrepeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_texrepeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_repeat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_repeat_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_filter: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_mip_filter_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_bias: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_mip_bias_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_min_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_min_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_max_mip: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_max_mip_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_max_aniso: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_max_aniso_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_get_tex_mip_enable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_tex_mip_enable_ext: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sampler_id', documentation: i18n. }
        ],
        signature: '(sampler_id)'
    },
	gpu_push_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_pop_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_get_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gpu_set_state: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'map', documentation: i18n..map }
        ],
        signature: '(map)'
    },
	draw_light_define_ambient: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(col)'
    },
	draw_light_define_direction: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'dx', documentation: i18n. },
            { label: 'dy', documentation: i18n. },
            { label: 'dz', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(ind, dx, dy, dz, col)'
    },
	draw_light_define_point: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'z', documentation: i18n..z },
            { label: 'range', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(ind, x, y, z, range, col)'
    },
	draw_light_enable: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind },
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(ind, enable)'
    },
	draw_set_lighting: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	draw_light_get_ambient: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	draw_light_get: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'ind', documentation: i18n..ind }
        ],
        signature: '(ind)'
    },
	draw_get_lighting: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	load_csv: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'filename', documentation: i18n..filename }
        ],
        signature: '(filename)'
    },
    skeleton_animation_get_frame: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'track', documentation: i18n..track }
        ],
        signature: '(track)'
    },
	skeleton_animation_set_frame: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'track', documentation: i18n..track },
            { label: 'index', documentation: i18n..index }
        ],
        signature: '(track, index)'
    },
	layer_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_name', documentation: i18n. }
        ],
        signature: '(layer_name)'
    },
	layer_get_id_at_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(depth)'
    },
	layer_get_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'depth', documentation: i18n..depth },
            { label: 'name*', documentation: i18n. },
            { label: '...', documentation: i18n..more }
        ],
        signature: '(depth, name*, ...)'
    },
	layer_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_destroy_instances: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_add_instance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'instance', documentation: i18n..instance }
        ],
        signature: '(layer_id, instance)'
    },
	layer_has_instance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'instance', documentation: i18n..instance }
        ],
        signature: '(layer_id, instance)'
    },
	layer_set_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'visible', documentation: i18n. }
        ],
        signature: '(layer_id, visible)'
    },
	layer_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x }
        ],
        signature: '(layer_id, x)'
    },
	layer_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(layer_id, y)'
    },
	layer_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_hspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'speed', documentation: i18n..speed }
        ],
        signature: '(layer_id, speed)'
    },
	layer_vspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'speed', documentation: i18n..speed }
        ],
        signature: '(layer_id, speed)'
    },
	layer_get_hspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_get_vspeed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_script_begin: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'script', documentation: i18n. }
        ],
        signature: '(layer_id, script)'
    },
	layer_script_end: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'script', documentation: i18n. }
        ],
        signature: '(layer_id, script)'
    },
	layer_shader: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'shader', documentation: i18n..shader }
        ],
        signature: '(layer_id, shader)'
    },
	layer_get_script_begin: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_get_script_end: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_get_shader: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_set_target_room: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'room', documentation: i18n. }
        ],
        signature: '(room)'
    },
	layer_get_target_room: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	layer_reset_target_room: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	layer_get_all: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	layer_get_all_elements: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_get_name: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(layer_id, depth)'
    },
	layer_get_element_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'element_id', documentation: i18n. }
        ],
        signature: '(element_id)'
    },
	layer_get_element_type: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'element_id', documentation: i18n. }
        ],
        signature: '(element_id)'
    },
	layer_element_move: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'element_id', documentation: i18n. },
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(element_id, layer_id)'
    },
	layer_force_draw_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'force', documentation: i18n. },
            { label: 'depth', documentation: i18n..depth }
        ],
        signature: '(force, depth)'
    },
	layer_is_draw_depth_forced: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	layer_get_forced_depth: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	layer_background_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_background_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(layer_id, background_element_id)'
    },
	layer_background_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(layer_id, sprite)'
    },
	layer_background_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'visible', documentation: i18n. }
        ],
        signature: '(background_element_id, visible)'
    },
	layer_background_change: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(background_element_id, sprite)'
    },
	layer_background_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(background_element_id, sprite)'
    },
	layer_background_htiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'tiled', documentation: i18n. }
        ],
        signature: '(background_element_id, tiled)'
    },
	layer_background_vtiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'tiled', documentation: i18n. }
        ],
        signature: '(background_element_id, tiled)'
    },
	layer_background_stretch: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'stretch', documentation: i18n. }
        ],
        signature: '(background_element_id, stretch)'
    },
	layer_background_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'yscale', documentation: i18n..yscale }
        ],
        signature: '(background_element_id, yscale)'
    },
	layer_background_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'xscale', documentation: i18n..xscale }
        ],
        signature: '(background_element_id, xscale)'
    },
	layer_background_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(background_element_id, col)'
    },
	layer_background_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(background_element_id, alpha)'
    },
	layer_background_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'image_index', documentation: i18n. }
        ],
        signature: '(background_element_id, image_index)'
    },
	layer_background_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. },
            { label: 'image_speed', documentation: i18n. }
        ],
        signature: '(background_element_id, image_speed)'
    },
	layer_background_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_htiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_vtiled: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_stretch: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_background_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'background_element_id', documentation: i18n. }
        ],
        signature: '(background_element_id)'
    },
	layer_sprite_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'sprite_element_name', documentation: i18n. }
        ],
        signature: '(layer_id, sprite_element_name)'
    },
	layer_sprite_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(layer_id, sprite_element_id)'
    },
	layer_sprite_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(layer_id, x, y, sprite)'
    },
	layer_sprite_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_change: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(sprite_element_id, sprite)'
    },
	layer_sprite_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'image_index', documentation: i18n. }
        ],
        signature: '(sprite_element_id, image_index)'
    },
	layer_sprite_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'image_speed', documentation: i18n. }
        ],
        signature: '(sprite_element_id, image_speed)'
    },
	layer_sprite_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'xscale', documentation: i18n..xscale }
        ],
        signature: '(sprite_element_id, xscale)'
    },
	layer_sprite_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'yscale', documentation: i18n..yscale }
        ],
        signature: '(sprite_element_id, yscale)'
    },
	layer_sprite_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(sprite_element_id, angle)'
    },
	layer_sprite_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(sprite_element_id, col)'
    },
	layer_sprite_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(sprite_element_id, alpha)'
    },
	layer_sprite_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x }
        ],
        signature: '(sprite_element_id, x)'
    },
	layer_sprite_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(sprite_element_id, y)'
    },
	layer_sprite_get_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_sprite_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'sprite_element_id', documentation: i18n. }
        ],
        signature: '(sprite_element_id)'
    },
	layer_tilemap_get_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	layer_tilemap_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(layer_id, tilemap_element_id)'
    },
	layer_tilemap_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'tileset', documentation: i18n. },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(layer_id, x, y, tileset, width, height)'
    },
	layer_tilemap_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_tileset: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'tileset', documentation: i18n. }
        ],
        signature: '(tilemap_element_id, tileset)'
    },
	tilemap_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x }
        ],
        signature: '(tilemap_element_id, x)'
    },
	tilemap_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tilemap_element_id, y)'
    },
	tilemap_set: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'tiledata', documentation: i18n. },
            { label: 'cell_x', documentation: i18n. },
            { label: 'cell_y', documentation: i18n. }
        ],
        signature: '(tilemap_element_id, tiledata, cell_x, cell_y)'
    },
	tilemap_set_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'tiledata', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tilemap_element_id, tiledata, x, y)'
    },
	tilemap_get_tileset: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_tile_width: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_tile_height: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_width: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_height: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'cell_x', documentation: i18n. },
            { label: 'cell_y', documentation: i18n. }
        ],
        signature: '(tilemap_element_id, cell_x, cell_y)'
    },
	tilemap_get_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_get_cell_x_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_get_cell_y_at_pixel: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	tilemap_clear: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tilemap_element_id, tiledata)'
    },
	draw_tilemap: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tilemap_element_id, x, y)'
    },
	draw_tile: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tileset', documentation: i18n. },
            { label: 'tiledata', documentation: i18n. },
            { label: 'frame', documentation: i18n..frame },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tileset, tiledata, frame, x, y)'
    },
	tilemap_set_global_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	tilemap_get_global_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	tilemap_set_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. },
            { label: 'mask', documentation: i18n. }
        ],
        signature: '(tilemap_element_id, mask)'
    },
	tilemap_get_mask: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tilemap_get_frame: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tilemap_element_id', documentation: i18n. }
        ],
        signature: '(tilemap_element_id)'
    },
	tile_set_empty: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tiledata)'
    },
	tile_set_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. },
            { label: 'tileindex', documentation: i18n. }
        ],
        signature: '(tiledata, tileindex)'
    },
	tile_set_flip: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. },
            { label: 'flip', documentation: i18n. }
        ],
        signature: '(tiledata, flip)'
    },
	tile_set_mirror: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. },
            { label: 'mirror', documentation: i18n. }
        ],
        signature: '(tiledata, mirror)'
    },
	tile_set_rotate: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. },
            { label: 'rotate', documentation: i18n. }
        ],
        signature: '(tiledata, rotate)'
    },
	tile_get_empty: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tiledata)'
    },
	tile_get_index: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tiledata)'
    },
	tile_get_flip: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tiledata)'
    },
	tile_get_mirror: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tiledata)'
    },
	tile_get_rotate: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tiledata', documentation: i18n. }
        ],
        signature: '(tiledata)'
    },
	layer_tile_exists: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'tile_element_id', documentation: i18n. },
            { label: '...', documentation: i18n..more }
        ],
        signature: '(layer_id, tile_element_id, ...)'
    },
	layer_tile_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y },
            { label: 'tileset', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(layer_id, x, y, tileset, left, top, width, height)'
    },
	layer_tile_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_change: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'sprite', documentation: i18n..sprite }
        ],
        signature: '(tile_element_id, sprite)'
    },
	layer_tile_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'xscale', documentation: i18n..xscale }
        ],
        signature: '(tile_element_id, xscale)'
    },
	layer_tile_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'yscale', documentation: i18n..yscale }
        ],
        signature: '(tile_element_id, yscale)'
    },
	layer_tile_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'col', documentation: i18n..col }
        ],
        signature: '(tile_element_id, col)'
    },
	layer_tile_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'alpha', documentation: i18n..alpha }
        ],
        signature: '(tile_element_id, alpha)'
    },
	layer_tile_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'x', documentation: i18n..x }
        ],
        signature: '(tile_element_id, x)'
    },
	layer_tile_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(tile_element_id, y)'
    },
	layer_tile_region: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'left', documentation: i18n..left },
            { label: 'top', documentation: i18n..top },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(tile_element_id, left, top, width, height)'
    },
	layer_tile_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. },
            { label: 'visible', documentation: i18n. }
        ],
        signature: '(tile_element_id, visible)'
    },
	layer_tile_get_sprite: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_xscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_yscale: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_blend: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_alpha: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_region: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_tile_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'tile_element_id', documentation: i18n. }
        ],
        signature: '(tile_element_id)'
    },
	layer_instance_get_instance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'instance_element_id', documentation: i18n. }
        ],
        signature: '(instance_element_id)'
    },
	instance_activate_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	instance_deactivate_layer: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'layer_id', documentation: i18n. }
        ],
        signature: '(layer_id)'
    },
	camera_create: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	camera_create_view: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'room_x', documentation: i18n. },
            { label: 'room_y', documentation: i18n. },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height },
            { label: 'angle', documentation: i18n..angle },
            { label: 'object', documentation: i18n. },
            { label: 'x_speed', documentation: i18n. },
            { label: 'y_speed', documentation: i18n. },
            { label: 'x_border', documentation: i18n. },
            { label: 'y_border', documentation: i18n. }
        ],
        signature: '(room_x, room_y, width, height, angle, object, x_speed, y_speed, x_border, y_border)'
    },
	camera_destroy: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_apply: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_active: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	camera_get_default: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	camera_set_default: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_set_view_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'matrix', documentation: i18n. }
        ],
        signature: '(camera, matrix)'
    },
	camera_set_proj_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'matrix', documentation: i18n. }
        ],
        signature: '(camera, matrix)'
    },
	camera_set_update_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'script', documentation: i18n. }
        ],
        signature: '(camera, script)'
    },
	camera_set_begin_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'script', documentation: i18n. }
        ],
        signature: '(camera, script)'
    },
	camera_set_end_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'script', documentation: i18n. }
        ],
        signature: '(camera, script)'
    },
	camera_set_view_pos: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'x', documentation: i18n..x },
            { label: 'y', documentation: i18n..y }
        ],
        signature: '(camera, x, y)'
    },
	camera_set_view_size: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'width', documentation: i18n..width },
            { label: 'height', documentation: i18n..height }
        ],
        signature: '(camera, width, height)'
    },
	camera_set_view_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'x_speed', documentation: i18n. },
            { label: 'y_speed', documentation: i18n. }
        ],
        signature: '(camera, x_speed, y_speed)'
    },
	camera_set_view_border: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'x_border', documentation: i18n. },
            { label: 'y_border', documentation: i18n. }
        ],
        signature: '(camera, x_border, y_border)'
    },
	camera_set_view_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(camera, angle)'
    },
	camera_set_view_target: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. },
            { label: 'object', documentation: i18n. }
        ],
        signature: '(camera, object)'
    },
	camera_get_view_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_proj_mat: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_update_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_begin_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_end_script: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_width: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_height: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_speed_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_speed_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_border_x: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_border_y: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	camera_get_view_target: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(camera)'
    },
	view_get_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_get_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_get_xport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_get_yport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_get_wport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_get_hport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_get_surface_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. }
        ],
        signature: '(view)'
    },
	view_set_camera: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'camera', documentation: i18n. }
        ],
        signature: '(view, camera)'
    },
	view_set_visible: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'visible', documentation: i18n. }
        ],
        signature: '(view, visible)'
    },
	view_set_xport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'xport', documentation: i18n. }
        ],
        signature: '(view, xport)'
    },
	view_set_yport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'yport', documentation: i18n. }
        ],
        signature: '(view, yport)'
    },
	view_set_wport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'wport', documentation: i18n. }
        ],
        signature: '(view, wport)'
    },
	view_set_hport: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'hport', documentation: i18n. }
        ],
        signature: '(view, hport)'
    },
	view_set_surface_id: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'view', documentation: i18n. },
            { label: 'surface_id', documentation: i18n. }
        ],
        signature: '(view, surface_id)'
    },
	gesture_drag_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'time', documentation: i18n..time }
        ],
        signature: '(time)'
    },
	gesture_drag_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'distance', documentation: i18n. }
        ],
        signature: '(distance)'
    },
	gesture_flick_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'speed', documentation: i18n..speed }
        ],
        signature: '(speed)'
    },
	gesture_double_tap_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'time', documentation: i18n..time }
        ],
        signature: '(time)'
    },
	gesture_double_tap_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'distance', documentation: i18n. }
        ],
        signature: '(distance)'
    },
	gesture_pinch_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'distance', documentation: i18n. }
        ],
        signature: '(distance)'
    },
	gesture_pinch_angle_towards: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
	gesture_pinch_angle_away: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
	gesture_rotate_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'time', documentation: i18n..time }
        ],
        signature: '(time)'
    },
	gesture_rotate_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'angle', documentation: i18n..angle }
        ],
        signature: '(angle)'
    },
	gesture_tap_count: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2,
        parameters: [
            { label: 'enable', documentation: i18n..enable }
        ],
        signature: '(enable)'
    },
	gesture_get_drag_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_drag_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_flick_speed: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_double_tap_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_double_tap_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_pinch_distance: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_pinch_angle_towards: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_pinch_angle_away: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_rotate_time: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_rotate_angle: {
        description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
    },
	gesture_get_tap_count: {
		description: '[Function] (' + i18n_notice.new_2 + ')',
        available: datasimple.gms2
	}
};

exports.globalvariables = {
    argument: {description: '[Variable]',available: datasimple.all},
	argument0: {description: '[Variable]',available: datasimple.all},
	argument1: {description: '[Variable]',available: datasimple.all},
	argument10: {description: '[Variable]',available: datasimple.all},
	argument11: {description: '[Variable]',available: datasimple.all},
	argument12: {description: '[Variable]',available: datasimple.all},
	argument13: {description: '[Variable]',available: datasimple.all},
	argument14: {description: '[Variable]',available: datasimple.all},
	argument15: {description: '[Variable]',available: datasimple.all},
	argument2: {description: '[Variable]',available: datasimple.all},
	argument3: {description: '[Variable]',available: datasimple.all},
	argument4: {description: '[Variable]',available: datasimple.all},
	argument5: {description: '[Variable]',available: datasimple.all},
	argument6: {description: '[Variable]',available: datasimple.all},
	argument7: {description: '[Variable]',available: datasimple.all},
	argument8: {description: '[Variable]',available: datasimple.all},
	argument9: {description: '[Variable]',available: datasimple.all},
	argument_count: {description: '[Variable]',available: datasimple.all},
	argument_relative: {description: '[Variable]',available: datasimple.all},
	async_load: {description: '[Variable]',available: datasimple.all},
	browser_height: {description: '[Variable]',available: datasimple.all},
	browser_width: {description: '[Variable]',available: datasimple.all},
	caption_health: {description: '[Variable]',available: datasimple.all},
	caption_lives: {description: '[Variable]',available: datasimple.all},
	caption_score: {description: '[Variable]',available: datasimple.all},
	current_day: {description: '[Variable]',available: datasimple.all},
	current_hour: {description: '[Variable]',available: datasimple.all},
	current_minute: {description: '[Variable]',available: datasimple.all},
	current_month: {description: '[Variable]',available: datasimple.all},
	current_second: {description: '[Variable]',available: datasimple.all},
	current_time: {description: '[Variable]',available: datasimple.all},
	current_weekday: {description: '[Variable]',available: datasimple.all},
	current_year: {description: '[Variable]',available: datasimple.all},
	cursor_sprite: {description: '[Variable]',available: datasimple.all},
	debug_mode: {description: '[Variable]',available: datasimple.all},
	delta_time: {description: '[Variable]',available: datasimple.all},
	display_aa: {description: '[Variable]',available: datasimple.all},
	error_last: {description: '[Variable]',available: datasimple.all},
	error_occurred: {description: '[Variable]',available: datasimple.all},
	event_action: {description: '[Variable]',available: datasimple.all},
	event_number: {description: '[Variable]',available: datasimple.all},
	event_object: {description: '[Variable]',available: datasimple.all},
	event_type: {description: '[Variable]',available: datasimple.all},
	fps: {description: '[Variable]',available: datasimple.all},
	fps_real: {description: '[Variable]',available: datasimple.all},
	game_id: {description: '[Variable]',available: datasimple.all},
	health: {description: '[Variable]',available: datasimple.all},
	instance_count: {description: '[Variable]',available: datasimple.all},
	instance_id: {description: '[Variable]',available: datasimple.all},
	keyboard_key: {description: '[Variable]',available: datasimple.all},
	keyboard_lastchar: {description: '[Variable]',available: datasimple.all},
	keyboard_lastkey: {description: '[Variable]',available: datasimple.all},
	keyboard_string: {description: '[Variable]',available: datasimple.all},
	lives: {description: '[Variable]',available: datasimple.all},
	mouse_button: {description: '[Variable]',available: datasimple.all},
	mouse_lastbutton: {description: '[Variable]',available: datasimple.all},
	mouse_x: {description: '[Variable]',available: datasimple.all},
	mouse_y: {description: '[Variable]',available: datasimple.all},
	os_browser: {description: '[Variable]',available: datasimple.all},
	os_device: {description: '[Variable]',available: datasimple.all},
	os_type: {description: '[Variable]',available: datasimple.all},
	os_version: {description: '[Variable]',available: datasimple.all},
	program_directory: {description: '[Variable]',available: datasimple.all},
	room: {description: '[Variable]',available: datasimple.all},
	room_caption: {description: '[Variable]',available: datasimple.all},
	room_first: {description: '[Variable]',available: datasimple.all},
	room_height: {description: '[Variable]',available: datasimple.all},
	room_last: {description: '[Variable]',available: datasimple.all},
	room_persistent: {description: '[Variable]',available: datasimple.all},
	room_speed: {description: '[Variable]',available: datasimple.all},
	room_width: {description: '[Variable]',available: datasimple.all},
	score: {description: '[Variable]',available: datasimple.all},
	show_health: {description: '[Variable]',available: datasimple.all},
	show_lives: {description: '[Variable]',available: datasimple.all},
	show_score: {description: '[Variable]',available: datasimple.all},
	temp_directory: {description: '[Variable]',available: datasimple.all},
	transition_color: {description: '[Variable]',available: datasimple.all},
	transition_kind: {description: '[Variable]',available: datasimple.all},
	transition_steps: {description: '[Variable]',available: datasimple.all},
	webgl_enabled: {description: '[Variable]',available: datasimple.gms1},
	working_directory: {description: '[Variable]',available: datasimple.all},
	alarm: {description: '[Variable]',available: datasimple.all},
	bbox_bottom: {description: '[Variable]',available: datasimple.all},
	bbox_left: {description: '[Variable]',available: datasimple.all},
	bbox_right: {description: '[Variable]',available: datasimple.all},
	bbox_top: {description: '[Variable]',available: datasimple.all},
	depth: {description: '[Variable]',available: datasimple.all},
	direction: {description: '[Variable]',available: datasimple.all},
	friction: {description: '[Variable]',available: datasimple.all},
	gravity: {description: '[Variable]',available: datasimple.all},
	gravity_direction: {description: '[Variable]',available: datasimple.all},
	hspeed: {description: '[Variable]',available: datasimple.all},
	id: {description: '[Variable]',available: datasimple.all},
	image_alpha: {description: '[Variable]',available: datasimple.all},
	image_angle: {description: '[Variable]',available: datasimple.all},
	image_blend: {description: '[Variable]',available: datasimple.all},
	image_index: {description: '[Variable]',available: datasimple.all},
	image_number: {description: '[Variable]',available: datasimple.all},
	image_single: {description: '[Variable]',available: datasimple.all},
	image_speed: {description: '[Variable]',available: datasimple.all},
	image_xscale: {description: '[Variable]',available: datasimple.all},
	image_yscale: {description: '[Variable]',available: datasimple.all},
	mask_index: {description: '[Variable]',available: datasimple.all},
	object_index: {description: '[Variable]',available: datasimple.all},
	path_endaction: {description: '[Variable]',available: datasimple.all},
	path_index: {description: '[Variable]',available: datasimple.all},
	path_orientation: {description: '[Variable]',available: datasimple.all},
	path_position: {description: '[Variable]',available: datasimple.all},
	path_positionprevious: {description: '[Variable]',available: datasimple.all},
	path_scale: {description: '[Variable]',available: datasimple.all},
	path_speed: {description: '[Variable]',available: datasimple.all},
	persistent: {description: '[Variable]',available: datasimple.all},
	phy_active: {description: '[Variable]',available: datasimple.gms1},
	phy_angular_damping: {description: '[Variable]',available: datasimple.gms1},
	phy_angular_velocity: {description: '[Variable]',available: datasimple.gms1},
	phy_bullet: {description: '[Variable]',available: datasimple.gms1},
	phy_collision_points: {description: '[Variable]',available: datasimple.gms1},
	phy_collision_x: {description: '[Variable]',available: datasimple.gms1},
	phy_collision_y: {description: '[Variable]',available: datasimple.gms1},
	phy_col_normal_x: {description: '[Variable]',available: datasimple.gms1},
	phy_col_normal_y: {description: '[Variable]',available: datasimple.gms1},
	phy_com_x: {description: '[Variable]',available: datasimple.gms1},
	phy_com_y: {description: '[Variable]',available: datasimple.gms1},
	phy_dynamic: {description: '[Variable]',available: datasimple.gms1},
	phy_fixed_rotation: {description: '[Variable]',available: datasimple.gms1},
	phy_inertia: {description: '[Variable]',available: datasimple.gms1},
	phy_kinematic: {description: '[Variable]',available: datasimple.gms1},
	phy_linear_damping: {description: '[Variable]',available: datasimple.gms1},
	phy_linear_velocity_x: {description: '[Variable]',available: datasimple.gms1},
	phy_linear_velocity_y: {description: '[Variable]',available: datasimple.gms1},
	phy_mass: {description: '[Variable]',available: datasimple.gms1},
	phy_position_x: {description: '[Variable]',available: datasimple.gms1},
	phy_position_xprevious: {description: '[Variable]',available: datasimple.gms1},
	phy_position_y: {description: '[Variable]',available: datasimple.gms1},
	phy_position_yprevious: {description: '[Variable]',available: datasimple.gms1},
	phy_rotation: {description: '[Variable]',available: datasimple.gms1},
	phy_sleeping: {description: '[Variable]',available: datasimple.gms1},
	phy_speed: {description: '[Variable]',available: datasimple.gms1},
	phy_speed_x: {description: '[Variable]',available: datasimple.gms1},
	phy_speed_y: {description: '[Variable]',available: datasimple.gms1},
	solid: {description: '[Variable]',available: datasimple.all},
	speed: {description: '[Variable]',available: datasimple.all},
	sprite_height: {description: '[Variable]',available: datasimple.all},
	sprite_index: {description: '[Variable]',available: datasimple.all},
	sprite_width: {description: '[Variable]',available: datasimple.all},
	sprite_xoffset: {description: '[Variable]',available: datasimple.all},
	sprite_yoffset: {description: '[Variable]',available: datasimple.all},
	timeline_index: {description: '[Variable]',available: datasimple.all},
	timeline_loop: {description: '[Variable]',available: datasimple.all},
	timeline_position: {description: '[Variable]',available: datasimple.all},
	timeline_running: {description: '[Variable]',available: datasimple.all},
	timeline_speed: {description: '[Variable]',available: datasimple.all},
	visible: {description: '[Variable]',available: datasimple.all},
	vspeed: {description: '[Variable]',available: datasimple.all},
	x: {description: '[Variable]',available: datasimple.all},
	xprevious: {description: '[Variable]',available: datasimple.all},
	xstart: {description: '[Variable]',available: datasimple.all},
	y: {description: '[Variable]',available: datasimple.all},
	yprevious: {description: '[Variable]',available: datasimple.all},
	ystart: {description: '[Variable]',available: datasimple.all},
	view_enabled: {description: '[Variable]',available: datasimple.all},
	view_current: {description: '[Variable]',available: datasimple.all},
	background_alpha: {description: '[Variable]',available: datasimple.all},
	background_blend: {description: '[Variable]',available: datasimple.all},
	background_color: {description: '[Variable]',available: datasimple.all},
	background_foreground: {description: '[Variable]',available: datasimple.all},
	background_height: {description: '[Variable]',available: datasimple.all},
	background_hspeed: {description: '[Variable]',available: datasimple.all},
	background_htiled: {description: '[Variable]',available: datasimple.all},
	background_index: {description: '[Variable]',available: datasimple.all},
	background_showcolor: {description: '[Variable]',available: datasimple.all},
	background_visible: {description: '[Variable]',available: datasimple.all},
	background_vspeed: {description: '[Variable]',available: datasimple.all},
	background_vtiled: {description: '[Variable]',available: datasimple.all},
	background_width: {description: '[Variable]',available: datasimple.all},
	background_x: {description: '[Variable]',available: datasimple.all},
	background_xscale: {description: '[Variable]',available: datasimple.all},
	background_y: {description: '[Variable]',available: datasimple.all},
	background_yscale: {description: '[Variable]',available: datasimple.all},
	background_visible: {description: '[Variable] [0..7]',available: datasimple.all},
	background_foreground: {description: '[Variable] [0..7]',available: datasimple.all},
	background_index: {description: '[Variable] [0..7]',available: datasimple.all},
	background_x: {description: '[Variable] [0..7]',available: datasimple.all},
	background_y: {description: '[Variable] [0..7]',available: datasimple.all},
	background_width: {description: '[Variable] [0..7]',available: datasimple.all},
	background_height: {description: '[Variable] [0..7]',available: datasimple.all},
	background_htiled: {description: '[Variable] [0..7]',available: datasimple.all},
	background_vtiled: {description: '[Variable] [0..7]',available: datasimple.all},
	background_xscale: {description: '[Variable] [0..7]',available: datasimple.all},
	background_yscale: {description: '[Variable] [0..7]',available: datasimple.all},
	background_hspeed: {description: '[Variable] [0..7]',available: datasimple.all},
	background_vspeed: {description: '[Variable] [0..7]',available: datasimple.all},
	background_blend: {description: '[Variable] [0..7]',available: datasimple.all},
	background_alpha: {description: '[Variable] [0..7]',available: datasimple.all},
    view_visible: {description: '[Variable] [0..7]',available: datasimple.all},
	view_xview: {description: '[Variable] [0..7]',available: datasimple.all},
	view_yview: {description: '[Variable] [0..7]',available: datasimple.all},
	view_wview: {description: '[Variable] [0..7]',available: datasimple.all},
	view_hview: {description: '[Variable] [0..7]',available: datasimple.all},
	view_xport: {description: '[Variable] [0..7]',available: datasimple.all},
	view_yport: {description: '[Variable] [0..7]',available: datasimple.all},
	view_wport: {description: '[Variable] [0..7]',available: datasimple.all},
	view_hport: {description: '[Variable] [0..7]',available: datasimple.all},
	view_angle: {description: '[Variable] [0..7]',available: datasimple.all},
	view_hborder: {description: '[Variable] [0..7]',available: datasimple.all},
	view_vborder: {description: '[Variable] [0..7]',available: datasimple.all},
	view_hspeed: {description: '[Variable] [0..7]',available: datasimple.all},
	view_vspeed: {description: '[Variable] [0..7]',available: datasimple.all},
    view_object: {description: '[Variable] [0..7]',available: datasimple.all},

    //GameMaker 8.1 Only
    secure_mode: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')',available: datasimple.gm81},
    gamemaker_pro: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')',available: datasimple.gm81},
	gamemaker_registered: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')',available: datasimple.gm81},
	gamemaker_version: {description: '[Variable] (' + i18n_notice.gm_81_variable + ')',available: datasimple.gm81},
    
    //Obsolete variables in GameMaker Studio 2
    view_angle: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_hborder: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_hport: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_hspeed: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_hview: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_object: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_vborder: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_visible: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_vspeed: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_wport: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_wview: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_xport: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_xview: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_yport: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},
	view_yview: {description: '[Variable] (' + i18n_notice.obsolete_2_variable + ')',available: datasimple.ob2},

	//New in GameMaker Studio 2
	layer: {description: '[Variable] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	view_camera: {description: '[Variable] [0..7] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	event_data: {description: '[Variable] (' + i18n_notice.new_2 + ')',available: datasimple.gms2}
};

exports.constants = {
    dll_cdel: {description: '[Constant]',available: datasimple.all},
	achievement_achievement_info: {description: '[Constant]',available: datasimple.gms1},
	achievement_challenge_completed: {description: '[Constant]',available: datasimple.gms1},
	achievement_challenge_completed_by_remote: {description: '[Constant]',available: datasimple.gms1},
	achievement_challenge_launched: {description: '[Constant]',available: datasimple.gms1},
	achievement_challenge_list_received: {description: '[Constant]',available: datasimple.gms1},
	achievement_challenge_received: {description: '[Constant]',available: datasimple.gms1},
	achievement_filter_all_players: {description: '[Constant]',available: datasimple.gms1},
	achievement_filter_friends_only: {description: '[Constant]',available: datasimple.gms1},
	achievement_friends_info: {description: '[Constant]',available: datasimple.gms1},
	achievement_leaderboard_info: {description: '[Constant]',available: datasimple.gms1},
	achievement_our_info: {description: '[Constant]',available: datasimple.gms1},
	achievement_pic_loaded: {description: '[Constant]',available: datasimple.gms1},
	achievement_player_info: {description: '[Constant]',available: datasimple.gms1},
	achievement_purchase_info: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_achievement: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_bank: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_friend_picker: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_leaderboard: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_profile: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_purchase_prompt: {description: '[Constant]',available: datasimple.gms1},
	achievement_show_ui: {description: '[Constant]',available: datasimple.gms1},
	achievement_type_achievement_challenge: {description: '[Constant]',available: datasimple.gms1},
	achievement_type_score_challenge: {description: '[Constant]',available: datasimple.gms1},
	all: {description: '[Constant]',available: datasimple.all},
	ANSI_CHARSET: {description: '[Constant]',available: datasimple.all},
	ARABIC_CHARSET: {description: '[Constant]',available: datasimple.all},
	asset_background: {description: '[Constant]',available: datasimple.gms1},
	asset_font: {description: '[Constant]',available: datasimple.gms1},
	asset_object: {description: '[Constant]',available: datasimple.gms1},
	asset_path: {description: '[Constant]',available: datasimple.gms1},
	asset_room: {description: '[Constant]',available: datasimple.gms1},
	asset_script: {description: '[Constant]',available: datasimple.gms1},
	asset_sound: {description: '[Constant]',available: datasimple.gms1},
	asset_sprite: {description: '[Constant]',available: datasimple.gms1},
	asset_timeline: {description: '[Constant]',available: datasimple.gms1},
	asset_unknown: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_exponent_distance: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_exponent_distance_clamped: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_inverse_distance: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_inverse_distance_clamped: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_linear_distance: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_linear_distance_clamped: {description: '[Constant]',available: datasimple.gms1},
	audio_falloff_none: {description: '[Constant]',available: datasimple.gms1},
	audio_new_system: {description: '[Constant]',available: datasimple.gms1},
	audio_old_system: {description: '[Constant]',available: datasimple.gms1},
	BALTIC_CHARSET: {description: '[Constant]',available: datasimple.all},
	bm_add: {description: '[Constant]',available: datasimple.all},
	bm_dest_alpha: {description: '[Constant]',available: datasimple.all},
	bm_dest_color: {description: '[Constant]',available: datasimple.all},
	bm_inv_dest_alpha: {description: '[Constant]',available: datasimple.all},
	bm_inv_dest_color: {description: '[Constant]',available: datasimple.all},
	bm_inv_src_alpha: {description: '[Constant]',available: datasimple.all},
	bm_inv_src_color: {description: '[Constant]',available: datasimple.all},
	bm_max: {description: '[Constant]',available: datasimple.all},
	bm_normal: {description: '[Constant]',available: datasimple.all},
	bm_one: {description: '[Constant]',available: datasimple.all},
	bm_src_alpha: {description: '[Constant]',available: datasimple.all},
	bm_src_alpha_sat: {description: '[Constant]',available: datasimple.all},
	bm_src_color: {description: '[Constant]',available: datasimple.all},
	bm_subtract: {description: '[Constant]',available: datasimple.all},
	bm_zero: {description: '[Constant]',available: datasimple.all},
	browser_chrome: {description: '[Constant]',available: datasimple.gms1},
	browser_firefox: {description: '[Constant]',available: datasimple.gms1},
	browser_ie: {description: '[Constant]',available: datasimple.gms1},
	browser_ie_mobile: {description: '[Constant]',available: datasimple.gms1},
	browser_not_a_browser: {description: '[Constant]',available: datasimple.gms1},
	browser_opera: {description: '[Constant]',available: datasimple.gms1},
	browser_safari: {description: '[Constant]',available: datasimple.gms1},
	browser_safari_mobile: {description: '[Constant]',available: datasimple.gms1},
	browser_tizen: {description: '[Constant]',available: datasimple.gms1},
	browser_unknown: {description: '[Constant]',available: datasimple.gms1},
	browser_windows_store: {description: '[Constant]',available: datasimple.gms1},
	buffer_bool: {description: '[Constant]',available: datasimple.gms1},
	buffer_f16: {description: '[Constant]',available: datasimple.gms1},
	buffer_f32: {description: '[Constant]',available: datasimple.gms1},
	buffer_f64: {description: '[Constant]',available: datasimple.gms1},
	buffer_fast: {description: '[Constant]',available: datasimple.gms1},
	buffer_fixed: {description: '[Constant]',available: datasimple.gms1},
	buffer_generalerror: {description: '[Constant]',available: datasimple.gms1},
	buffer_grow: {description: '[Constant]',available: datasimple.gms1},
	buffer_invalidtype: {description: '[Constant]',available: datasimple.gms1},
	buffer_outofbounds: {description: '[Constant]',available: datasimple.gms1},
	buffer_outofspace: {description: '[Constant]',available: datasimple.gms1},
	buffer_s16: {description: '[Constant]',available: datasimple.gms1},
	buffer_s32: {description: '[Constant]',available: datasimple.gms1},
	buffer_s8: {description: '[Constant]',available: datasimple.gms1},
	buffer_seek_end: {description: '[Constant]',available: datasimple.gms1},
	buffer_seek_relative: {description: '[Constant]',available: datasimple.gms1},
	buffer_seek_start: {description: '[Constant]',available: datasimple.gms1},
	buffer_string: {description: '[Constant]',available: datasimple.gms1},
	buffer_u16: {description: '[Constant]',available: datasimple.gms1},
	buffer_u32: {description: '[Constant]',available: datasimple.gms1},
	buffer_u8: {description: '[Constant]',available: datasimple.gms1},
	buffer_vbuffer: {description: '[Constant]',available: datasimple.gms1},
	buffer_wrap: {description: '[Constant]',available: datasimple.gms1},
	CHINESEBIG5_CHARSET: {description: '[Constant]',available: datasimple.all},
	cr_appstart: {description: '[Constant]',available: datasimple.all},
	cr_arrow: {description: '[Constant]',available: datasimple.all},
	cr_beam: {description: '[Constant]',available: datasimple.all},
	cr_cross: {description: '[Constant]',available: datasimple.all},
	cr_default: {description: '[Constant]',available: datasimple.all},
	cr_drag: {description: '[Constant]',available: datasimple.all},
	cr_handpoint: {description: '[Constant]',available: datasimple.all},
	cr_help: {description: '[Constant]',available: datasimple.all},
	cr_hourglass: {description: '[Constant]',available: datasimple.all},
	cr_hsplit: {description: '[Constant]',available: datasimple.all},
	cr_multidrag: {description: '[Constant]',available: datasimple.all},
	cr_no: {description: '[Constant]',available: datasimple.all},
	cr_nodrop: {description: '[Constant]',available: datasimple.all},
	cr_none: {description: '[Constant]',available: datasimple.all},
	cr_size_all: {description: '[Constant]',available: datasimple.all},
	cr_size_nesw: {description: '[Constant]',available: datasimple.all},
	cr_size_ns: {description: '[Constant]',available: datasimple.all},
	cr_size_nwse: {description: '[Constant]',available: datasimple.all},
	cr_size_we: {description: '[Constant]',available: datasimple.all},
	cr_sqlwait: {description: '[Constant]',available: datasimple.all},
	cr_uparrow: {description: '[Constant]',available: datasimple.all},
	cr_vsplit: {description: '[Constant]',available: datasimple.all},
	c_aqua: {description: '[Constant]',available: datasimple.all},
	c_black: {description: '[Constant]',available: datasimple.all},
	c_blue: {description: '[Constant]',available: datasimple.all},
	c_dkgray: {description: '[Constant]',available: datasimple.all},
	c_fuchsia: {description: '[Constant]',available: datasimple.all},
	c_gray: {description: '[Constant]',available: datasimple.all},
	c_green: {description: '[Constant]',available: datasimple.all},
	c_lime: {description: '[Constant]',available: datasimple.all},
	c_ltgray: {description: '[Constant]',available: datasimple.all},
	c_maroon: {description: '[Constant]',available: datasimple.all},
	c_navy: {description: '[Constant]',available: datasimple.all},
	c_olive: {description: '[Constant]',available: datasimple.all},
	c_orange: {description: '[Constant]',available: datasimple.all},
	c_purple: {description: '[Constant]',available: datasimple.all},
	c_red: {description: '[Constant]',available: datasimple.all},
	c_silver: {description: '[Constant]',available: datasimple.all},
	c_teal: {description: '[Constant]',available: datasimple.all},
	c_white: {description: '[Constant]',available: datasimple.all},
	c_yellow: {description: '[Constant]',available: datasimple.all},
	DEFAULT_CHARSET: {description: '[Constant]',available: datasimple.all},
	device_emulator: {description: '[Constant]',available: datasimple.gms1},
	device_ios_ipad: {description: '[Constant]',available: datasimple.gms1},
	device_ios_ipad_retina: {description: '[Constant]',available: datasimple.gms1},
	device_ios_iphone: {description: '[Constant]',available: datasimple.gms1},
	device_ios_iphone5: {description: '[Constant]',available: datasimple.gms1},
	device_ios_iphone_retina: {description: '[Constant]',available: datasimple.gms1},
	device_ios_unknown: {description: '[Constant]',available: datasimple.gms1},
	device_tablet: {description: '[Constant]',available: datasimple.gms1},
	display_landscape: {description: '[Constant]',available: datasimple.gms1},
	display_landscape_flipped: {description: '[Constant]',available: datasimple.gms1},
	display_portrait: {description: '[Constant]',available: datasimple.gms1},
	display_portrait_flipped: {description: '[Constant]',available: datasimple.gms1},
	dll_cdecl: {description: '[Constant]',available: datasimple.all},
	dll_stdcall: {description: '[Constant]',available: datasimple.all},
	ds_type_grid: {description: '[Constant]',available: datasimple.gms1},
	ds_type_list: {description: '[Constant]',available: datasimple.gms1},
	ds_type_map: {description: '[Constant]',available: datasimple.gms1},
	ds_type_priority: {description: '[Constant]',available: datasimple.gms1},
	ds_type_queue: {description: '[Constant]',available: datasimple.gms1},
	ds_type_stack: {description: '[Constant]',available: datasimple.gms1},
	EASTEUROPE_CHARSET: {description: '[Constant]',available: datasimple.all},
	ef_cloud: {description: '[Constant]',available: datasimple.all},
	ef_ellipse: {description: '[Constant]',available: datasimple.all},
	ef_explosion: {description: '[Constant]',available: datasimple.all},
	ef_firework: {description: '[Constant]',available: datasimple.all},
	ef_flare: {description: '[Constant]',available: datasimple.all},
	ef_rain: {description: '[Constant]',available: datasimple.all},
	ef_ring: {description: '[Constant]',available: datasimple.all},
	ef_smoke: {description: '[Constant]',available: datasimple.all},
	ef_smokeup: {description: '[Constant]',available: datasimple.all},
	ef_snow: {description: '[Constant]',available: datasimple.all},
	ef_spark: {description: '[Constant]',available: datasimple.all},
	ef_star: {description: '[Constant]',available: datasimple.all},
	ev_alarm: {description: '[Constant]',available: datasimple.all},
	ev_animation_end: {description: '[Constant]',available: datasimple.all},
	ev_boundary: {description: '[Constant]',available: datasimple.all},
	ev_close_button: {description: '[Constant]',available: datasimple.all},
	ev_collision: {description: '[Constant]',available: datasimple.all},
	ev_create: {description: '[Constant]',available: datasimple.all},
	ev_destroy: {description: '[Constant]',available: datasimple.all},
	ev_draw: {description: '[Constant]',available: datasimple.all},
	ev_end_of_path: {description: '[Constant]',available: datasimple.all},
	ev_game_end: {description: '[Constant]',available: datasimple.all},
	ev_game_start: {description: '[Constant]',available: datasimple.all},
	ev_global_left_button: {description: '[Constant]',available: datasimple.all},
	ev_global_left_press: {description: '[Constant]',available: datasimple.all},
	ev_global_left_release: {description: '[Constant]',available: datasimple.all},
	ev_global_middle_button: {description: '[Constant]',available: datasimple.all},
	ev_global_middle_press: {description: '[Constant]',available: datasimple.all},
	ev_global_middle_release: {description: '[Constant]',available: datasimple.all},
	ev_global_press: {description: '[Constant]',available: datasimple.all},
	ev_global_release: {description: '[Constant]',available: datasimple.all},
	ev_global_right_button: {description: '[Constant]',available: datasimple.all},
	ev_global_right_press: {description: '[Constant]',available: datasimple.all},
	ev_global_right_release: {description: '[Constant]',available: datasimple.all},
	ev_gui: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button1: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button2: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button3: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button4: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button5: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button6: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button7: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_button8: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_down: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_left: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_right: {description: '[Constant]',available: datasimple.all},
	ev_joystick1_up: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button1: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button2: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button3: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button4: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button5: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button6: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button7: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_button8: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_down: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_left: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_right: {description: '[Constant]',available: datasimple.all},
	ev_joystick2_up: {description: '[Constant]',available: datasimple.all},
	ev_keyboard: {description: '[Constant]',available: datasimple.all},
	ev_keypress: {description: '[Constant]',available: datasimple.all},
	ev_keyrelease: {description: '[Constant]',available: datasimple.all},
	ev_left_button: {description: '[Constant]',available: datasimple.all},
	ev_left_press: {description: '[Constant]',available: datasimple.all},
	ev_left_release: {description: '[Constant]',available: datasimple.all},
	ev_middle_button: {description: '[Constant]',available: datasimple.all},
	ev_middle_press: {description: '[Constant]',available: datasimple.all},
	ev_middle_release: {description: '[Constant]',available: datasimple.all},
	ev_mouse: {description: '[Constant]',available: datasimple.all},
	ev_mouse_enter: {description: '[Constant]',available: datasimple.all},
	ev_mouse_leave: {description: '[Constant]',available: datasimple.all},
	ev_mouse_wheel_down: {description: '[Constant]',available: datasimple.all},
	ev_mouse_wheel_up: {description: '[Constant]',available: datasimple.all},
	ev_no_button: {description: '[Constant]',available: datasimple.all},
	ev_no_more_health: {description: '[Constant]',available: datasimple.all},
	ev_no_more_lives: {description: '[Constant]',available: datasimple.all},
	ev_other: {description: '[Constant]',available: datasimple.all},
	ev_outside: {description: '[Constant]',available: datasimple.all},
	ev_right_button: {description: '[Constant]',available: datasimple.all},
	ev_right_press: {description: '[Constant]',available: datasimple.all},
	ev_right_release: {description: '[Constant]',available: datasimple.all},
	ev_room_end: {description: '[Constant]',available: datasimple.all},
	ev_room_start: {description: '[Constant]',available: datasimple.all},
	ev_step: {description: '[Constant]',available: datasimple.all},
	ev_step_begin: {description: '[Constant]',available: datasimple.all},
	ev_step_end: {description: '[Constant]',available: datasimple.all},
	ev_step_normal: {description: '[Constant]',available: datasimple.all},
	ev_trigger: {description: '[Constant]',available: datasimple.all},
	ev_user0: {description: '[Constant]',available: datasimple.all},
	ev_user1: {description: '[Constant]',available: datasimple.all},
	ev_user10: {description: '[Constant]',available: datasimple.all},
	ev_user11: {description: '[Constant]',available: datasimple.all},
	ev_user12: {description: '[Constant]',available: datasimple.all},
	ev_user13: {description: '[Constant]',available: datasimple.all},
	ev_user14: {description: '[Constant]',available: datasimple.all},
	ev_user15: {description: '[Constant]',available: datasimple.all},
	ev_user2: {description: '[Constant]',available: datasimple.all},
	ev_user3: {description: '[Constant]',available: datasimple.all},
	ev_user4: {description: '[Constant]',available: datasimple.all},
	ev_user5: {description: '[Constant]',available: datasimple.all},
	ev_user6: {description: '[Constant]',available: datasimple.all},
	ev_user7: {description: '[Constant]',available: datasimple.all},
	ev_user8: {description: '[Constant]',available: datasimple.all},
	ev_user9: {description: '[Constant]',available: datasimple.all},
	false: {description: '[Constant]',available: datasimple.all},
	fa_archive: {description: '[Constant]',available: datasimple.all},
	fa_bottom: {description: '[Constant]',available: datasimple.all},
	fa_center: {description: '[Constant]',available: datasimple.all},
	fa_directory: {description: '[Constant]',available: datasimple.all},
	fa_hidden: {description: '[Constant]',available: datasimple.all},
	fa_left: {description: '[Constant]',available: datasimple.all},
	fa_middle: {description: '[Constant]',available: datasimple.all},
	fa_readonly: {description: '[Constant]',available: datasimple.all},
	fa_right: {description: '[Constant]',available: datasimple.all},
	fa_sysfile: {description: '[Constant]',available: datasimple.all},
	fa_top: {description: '[Constant]',available: datasimple.all},
	fa_volumeid: {description: '[Constant]',available: datasimple.all},
	GB2312_CHARSET: {description: '[Constant]',available: datasimple.all},
	global: {description: '[Constant]',available: datasimple.all},
	gp_axislh: {description: '[Constant]',available: datasimple.gms1},
	gp_axislv: {description: '[Constant]',available: datasimple.gms1},
	gp_axisrh: {description: '[Constant]',available: datasimple.gms1},
	gp_axisrv: {description: '[Constant]',available: datasimple.gms1},
	gp_face1: {description: '[Constant]',available: datasimple.gms1},
	gp_face2: {description: '[Constant]',available: datasimple.gms1},
	gp_face3: {description: '[Constant]',available: datasimple.gms1},
	gp_face4: {description: '[Constant]',available: datasimple.gms1},
	gp_padd: {description: '[Constant]',available: datasimple.gms1},
	gp_padl: {description: '[Constant]',available: datasimple.gms1},
	gp_padr: {description: '[Constant]',available: datasimple.gms1},
	gp_padu: {description: '[Constant]',available: datasimple.gms1},
	gp_select: {description: '[Constant]',available: datasimple.gms1},
	gp_shoulderl: {description: '[Constant]',available: datasimple.gms1},
	gp_shoulderlb: {description: '[Constant]',available: datasimple.gms1},
	gp_shoulderr: {description: '[Constant]',available: datasimple.gms1},
	gp_shoulderrb: {description: '[Constant]',available: datasimple.gms1},
	gp_start: {description: '[Constant]',available: datasimple.gms1},
	gp_stickl: {description: '[Constant]',available: datasimple.gms1},
	gp_stickr: {description: '[Constant]',available: datasimple.gms1},
	GREEK_CHARSET: {description: '[Constant]',available: datasimple.all},
	HANGEUL_CHARSET: {description: '[Constant]',available: datasimple.all},
	HEBREW_CHARSET: {description: '[Constant]',available: datasimple.all},
	JOHAB_CHARSET: {description: '[Constant]',available: datasimple.all},
	lb_disp_none: {description: '[Constant]',available: datasimple.gms1},
	lb_disp_numeric: {description: '[Constant]',available: datasimple.gms1},
	lb_disp_time_ms: {description: '[Constant]',available: datasimple.gms1},
	lb_disp_time_sec: {description: '[Constant]',available: datasimple.gms1},
	lb_sort_ascending: {description: '[Constant]',available: datasimple.gms1},
	lb_sort_descending: {description: '[Constant]',available: datasimple.gms1},
	lb_sort_none: {description: '[Constant]',available: datasimple.gms1},
	leaderboard_type_number: {description: '[Constant]',available: datasimple.gms1},
	leaderboard_type_time_mins_secs: {description: '[Constant]',available: datasimple.gms1},
	local: {description: '[Constant]',available: datasimple.all},
	MAC_CHARSET: {description: '[Constant]',available: datasimple.all},
	matrix_projection: {description: '[Constant]',available: datasimple.all},
	matrix_view: {description: '[Constant]',available: datasimple.all},
	matrix_world: {description: '[Constant]',available: datasimple.all},
	mb_any: {description: '[Constant]',available: datasimple.all},
	mb_left: {description: '[Constant]',available: datasimple.all},
	mb_middle: {description: '[Constant]',available: datasimple.all},
	mb_none: {description: '[Constant]',available: datasimple.all},
	mb_right: {description: '[Constant]',available: datasimple.all},
	network_socket_bluetooth: {description: '[Constant]',available: datasimple.gms1},
	network_socket_tcp: {description: '[Constant]',available: datasimple.gms1},
	network_socket_udp: {description: '[Constant]',available: datasimple.gms1},
	network_type_connect: {description: '[Constant]',available: datasimple.gms1},
	network_type_data: {description: '[Constant]',available: datasimple.gms1},
	network_type_disconnect: {description: '[Constant]',available: datasimple.gms1},
	noone: {description: '[Constant]',available: datasimple.all},
	OEM_CHARSET: {description: '[Constant]',available: datasimple.all},
	of_challenge_lose: {description: '[Constant]',available: datasimple.gms1},
	of_challenge_tie: {description: '[Constant]',available: datasimple.gms1},
	of_challenge_win: {description: '[Constant]',available: datasimple.gms1},
	os_android: {description: '[Constant]',available: datasimple.gms1},
	os_ios: {description: '[Constant]',available: datasimple.gms1},
	os_linux: {description: '[Constant]',available: datasimple.gms1},
	os_macosx: {description: '[Constant]',available: datasimple.gms1},
	os_psp: {description: '[Constant]',available: datasimple.gms1},
	os_symbian: {description: '[Constant]',available: datasimple.gms1},
	os_tizen: {description: '[Constant]',available: datasimple.gms1},
	os_unknown: {description: '[Constant]',available: datasimple.gms1},
	os_win32: {description: '[Constant]',available: datasimple.gms1},
	os_win8native: {description: '[Constant]',available: datasimple.gms1},
	os_windows: {description: '[Constant]',available: datasimple.gms1},
	os_winphone: {description: '[Constant]',available: datasimple.gms1},
	other: {description: '[Constant]',available: datasimple.all},
	ov_achievements: {description: '[Constant]',available: datasimple.gms1},
	ov_community: {description: '[Constant]',available: datasimple.gms1},
	ov_friends: {description: '[Constant]',available: datasimple.gms1},
	ov_gamegroup: {description: '[Constant]',available: datasimple.gms1},
	ov_players: {description: '[Constant]',available: datasimple.gms1},
	ov_settings: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_aabb: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_collision_pairs: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_coms: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_core_shapes: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_joints: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_obb: {description: '[Constant]',available: datasimple.gms1},
	phy_debug_render_shapes: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_anchor_1_x: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_anchor_1_y: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_anchor_2_x: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_anchor_2_y: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_angle: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_angle_limits: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_damping_ratio: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_frequency: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_length_1: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_length_2: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_lower_angle_limit: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_max_motor_force: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_max_motor_torque: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_motor_force: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_motor_speed: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_motor_torque: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_reaction_force_x: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_reaction_force_y: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_reaction_torque: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_speed: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_translation: {description: '[Constant]',available: datasimple.gms1},
	phy_joint_upper_angle_limit: {description: '[Constant]',available: datasimple.gms1},
	pi: {description: '[Constant]',available: datasimple.all},
	pr_linelist: {description: '[Constant]',available: datasimple.all},
	pr_linestrip: {description: '[Constant]',available: datasimple.all},
	pr_pointlist: {description: '[Constant]',available: datasimple.all},
	pr_trianglefan: {description: '[Constant]',available: datasimple.all},
	pr_trianglelist: {description: '[Constant]',available: datasimple.all},
	pr_trianglestrip: {description: '[Constant]',available: datasimple.all},
	ps_change_all: {description: '[Constant]',available: datasimple.all},
	ps_change_motion: {description: '[Constant]',available: datasimple.all},
	ps_change_shape: {description: '[Constant]',available: datasimple.all},
	ps_deflect_horizontal: {description: '[Constant]',available: datasimple.all},
	ps_deflect_vertical: {description: '[Constant]',available: datasimple.all},
	ps_distr_gaussian: {description: '[Constant]',available: datasimple.all},
	ps_distr_invgaussian: {description: '[Constant]',available: datasimple.all},
	ps_distr_linear: {description: '[Constant]',available: datasimple.all},
	ps_force_constant: {description: '[Constant]',available: datasimple.all},
	ps_force_linear: {description: '[Constant]',available: datasimple.all},
	ps_force_quadratic: {description: '[Constant]',available: datasimple.all},
	ps_shape_diamond: {description: '[Constant]',available: datasimple.all},
	ps_shape_ellipse: {description: '[Constant]',available: datasimple.all},
	ps_shape_line: {description: '[Constant]',available: datasimple.all},
	ps_shape_rectangle: {description: '[Constant]',available: datasimple.all},
	pt_shape_circle: {description: '[Constant]',available: datasimple.all},
	pt_shape_cloud: {description: '[Constant]',available: datasimple.all},
	pt_shape_disk: {description: '[Constant]',available: datasimple.all},
	pt_shape_explosion: {description: '[Constant]',available: datasimple.all},
	pt_shape_flare: {description: '[Constant]',available: datasimple.all},
	pt_shape_line: {description: '[Constant]',available: datasimple.all},
	pt_shape_pixel: {description: '[Constant]',available: datasimple.all},
	pt_shape_ring: {description: '[Constant]',available: datasimple.all},
	pt_shape_smoke: {description: '[Constant]',available: datasimple.all},
	pt_shape_snow: {description: '[Constant]',available: datasimple.all},
	pt_shape_spark: {description: '[Constant]',available: datasimple.all},
	pt_shape_sphere: {description: '[Constant]',available: datasimple.all},
	pt_shape_square: {description: '[Constant]',available: datasimple.all},
	pt_shape_star: {description: '[Constant]',available: datasimple.all},
	RUSSIAN_CHARSET: {description: '[Constant]',available: datasimple.all},
	self: {description: '[Constant]',available: datasimple.all},
	SHIFTJIS_CHARSET: {description: '[Constant]',available: datasimple.all},
	SYMBOL_CHARSET: {description: '[Constant]',available: datasimple.all},
	THAI_CHARSET: {description: '[Constant]',available: datasimple.all},
	true: {description: '[Constant]',available: datasimple.all},
	TURKISH_CHARSET: {description: '[Constant]',available: datasimple.all},
	ty_real: {description: '[Constant]',available: datasimple.all},
	ty_string: {description: '[Constant]',available: datasimple.all},
	vertex_type_colour: {description: '[Constant]',available: datasimple.gms1},
	vertex_type_float1: {description: '[Constant]',available: datasimple.gms1},
	vertex_type_float2: {description: '[Constant]',available: datasimple.gms1},
	vertex_type_float3: {description: '[Constant]',available: datasimple.gms1},
	vertex_type_float4: {description: '[Constant]',available: datasimple.gms1},
	vertex_type_ubyte4: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_binormal: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_blendindices: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_blendweight: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_colour: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_depth: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_fog: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_normal: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_position: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_psize: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_sample: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_tagnet: {description: '[Constant]',available: datasimple.gms1},
	vertex_usage_textcoord: {description: '[Constant]',available: datasimple.gms1},
	VIETNAMESE_CHARSET: {description: '[Constant]',available: datasimple.all},
	vk_add: {description: '[Constant]',available: datasimple.all},
	vk_alt: {description: '[Constant]',available: datasimple.all},
	vk_anykey: {description: '[Constant]',available: datasimple.all},
	vk_backspace: {description: '[Constant]',available: datasimple.all},
	vk_control: {description: '[Constant]',available: datasimple.all},
	vk_decimal: {description: '[Constant]',available: datasimple.all},
	vk_delete: {description: '[Constant]',available: datasimple.all},
	vk_divide: {description: '[Constant]',available: datasimple.all},
	vk_down: {description: '[Constant]',available: datasimple.all},
	vk_end: {description: '[Constant]',available: datasimple.all},
	vk_enter: {description: '[Constant]',available: datasimple.all},
	vk_escape: {description: '[Constant]',available: datasimple.all},
	vk_f1: {description: '[Constant]',available: datasimple.all},
	vk_f10: {description: '[Constant]',available: datasimple.all},
	vk_f11: {description: '[Constant]',available: datasimple.all},
	vk_f12: {description: '[Constant]',available: datasimple.all},
	vk_f2: {description: '[Constant]',available: datasimple.all},
	vk_f3: {description: '[Constant]',available: datasimple.all},
	vk_f4: {description: '[Constant]',available: datasimple.all},
	vk_f5: {description: '[Constant]',available: datasimple.all},
	vk_f6: {description: '[Constant]',available: datasimple.all},
	vk_f7: {description: '[Constant]',available: datasimple.all},
	vk_f8: {description: '[Constant]',available: datasimple.all},
	vk_f9: {description: '[Constant]',available: datasimple.all},
	vk_home: {description: '[Constant]',available: datasimple.all},
	vk_insert: {description: '[Constant]',available: datasimple.all},
	vk_lalt: {description: '[Constant]',available: datasimple.all},
	vk_lcontrol: {description: '[Constant]',available: datasimple.all},
	vk_left: {description: '[Constant]',available: datasimple.all},
	vk_lshift: {description: '[Constant]',available: datasimple.all},
	vk_multiply: {description: '[Constant]',available: datasimple.all},
	vk_nokey: {description: '[Constant]',available: datasimple.all},
	vk_numpad0: {description: '[Constant]',available: datasimple.all},
	vk_numpad1: {description: '[Constant]',available: datasimple.all},
	vk_numpad2: {description: '[Constant]',available: datasimple.all},
	vk_numpad3: {description: '[Constant]',available: datasimple.all},
	vk_numpad4: {description: '[Constant]',available: datasimple.all},
	vk_numpad5: {description: '[Constant]',available: datasimple.all},
	vk_numpad6: {description: '[Constant]',available: datasimple.all},
	vk_numpad7: {description: '[Constant]',available: datasimple.all},
	vk_numpad8: {description: '[Constant]',available: datasimple.all},
	vk_numpad9: {description: '[Constant]',available: datasimple.all},
	vk_pagedown: {description: '[Constant]',available: datasimple.all},
	vk_pageup: {description: '[Constant]',available: datasimple.all},
	vk_pause: {description: '[Constant]',available: datasimple.all},
	vk_printscreen: {description: '[Constant]',available: datasimple.all},
	vk_ralt: {description: '[Constant]',available: datasimple.all},
	vk_rcontrol: {description: '[Constant]',available: datasimple.all},
	vk_return: {description: '[Constant]',available: datasimple.all},
	vk_right: {description: '[Constant]',available: datasimple.all},
	vk_rshift: {description: '[Constant]',available: datasimple.all},
	vk_shift: {description: '[Constant]',available: datasimple.all},
	vk_space: {description: '[Constant]',available: datasimple.all},
	vk_subtract: {description: '[Constant]',available: datasimple.all},
	vk_tab: {description: '[Constant]',available: datasimple.all},
	vk_up: {description: '[Constant]',available: datasimple.all},

	//GameMaker 8.1 Only
	input_type: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
    se_chorus: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_compressor: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_echo: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_equalizer: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_flanger: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_gargle: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_none: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	se_reverb: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	text_type: {description: '[Constant] (' + i18n_notice.gm_81_constant + ')',available: datasimple.gm81},
	
	//New in GameMaker Studio 2
	undefined: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	pointer_invalid: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	pointer_null: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	path_action_stop: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	path_action_restart: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	path_action_continue: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	path_action_reverse: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	gamespeed_fps: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	gamespeed_microseconds: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_double_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_drag_start: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_dragging: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_drag_end: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_flick: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_pinch_start: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_pinch_in: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_pinch_out: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_pinch_end: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_rotate_start: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_rotating: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_gesture_rotate_end: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_double_tap: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_drag_start: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_dragging: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_drag_end: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_flick: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_pinch_start: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_pinch_in: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_pinch_out: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_pinch_end: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_rotate_start: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_rotating: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ev_global_gesture_rotate_end: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	bm_complex: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tf_point: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tf_linear: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tf_anisotropic: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	mip_off: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	mip_on: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	mip_markedonly: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	asset_tiles: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	asset_shader: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tile_rotate: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tile_flip: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tile_mirror: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	tile_index_mask: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_undefined: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_background: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_instance: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_oldtilemap: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_sprite: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_tilemap: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_particlesystem: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	layerelementtype_tile: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_never: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_less: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_equal: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_lessequal: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_greater: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_notequal: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_greaterequal: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cmpfunc_always: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cull_noculling: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cull_clockwise: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	cull_counterclockwise: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	lighttype_dir: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	lighttype_point: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	spritespeed_framespersecond: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	spritespeed_framespergameframe: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	browser_edge: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	of_challenge_win: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	of_challen: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	ge_lose: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	of_challenge_tie: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2},
	buffer_text: {description: '[Constant] (' + i18n_notice.new_2 + ')',available: datasimple.gms2}
};

exports.keywords = {
    and: {},
    break: {},
    case: {},
    catch: {},
    continue: {},
    default: {},
    do: {},
    else: {},
    exit: {},
    for: {},
    if: {},
    not: {},
    or: {},
    repeat: {},
    return: {},
    switch: {},
    until: {},
    var: {},
    while: {},
    with: {},
    xor: {}
};