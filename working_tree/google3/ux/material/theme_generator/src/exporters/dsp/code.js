'use strict';
const google3 = require('google3');
var DspExporter = class extends google3.ThemeExporter {
    generate() {
        var JSCompiler_inline_result = {
            dateCreated: new Date(Date.now()).toUTCString(),
            author: 'Material Design',
            version: '0.0.1',
            name: 'Material'
        };
        return [
            {
                path: `${ this.name }/dsp.json`,
                content: JSON.stringify({
                    dsp_spec_version: JSCompiler_inline_result.version,
                    last_updated_by: JSCompiler_inline_result.name,
                    last_updated: JSCompiler_inline_result.dateCreated,
                    settings: {
                        name: JSCompiler_inline_result.name,
                        package_version: JSCompiler_inline_result.version,
                        build_tool: 'StyleDictionary',
                        snippet_trigger_prefix: 'md_',
                        build_status_label: 'dev',
                        build_params: './config.js',
                        languages: [
                            {
                                label: 'Coffeescript',
                                export_tokens: !1,
                                snippet_id: 'coffeescript',
                                syntax: 'text/x-coffeescript'
                            },
                            {
                                label: 'C',
                                export_tokens: !1,
                                snippet_id: 'c',
                                syntax: 'text/x-csrc'
                            },
                            {
                                label: 'C#',
                                export_tokens: !1,
                                snippet_id: 'csharp',
                                syntax: 'text/x-csharp'
                            },
                            {
                                label: 'CSS',
                                export_tokens: !0,
                                snippet_id: 'css',
                                syntax: 'text/css',
                                'ext-com_adobe_xd-styledictionary_id': 'css'
                            },
                            {
                                label: 'Flutter (Dart)',
                                export_tokens: !0,
                                snippet_id: 'dart',
                                syntax: 'application/vnd.dart',
                                'ext-com_adobe_xd-styledictionary_id': 'flutter'
                            },
                            {
                                label: 'F#',
                                export_tokens: !1,
                                snippet_id: 'fsharp',
                                syntax: 'text/x-csharp'
                            },
                            {
                                label: 'Go',
                                export_tokens: !1,
                                snippet_id: 'go',
                                syntax: 'text/x-go'
                            },
                            {
                                label: 'Groovy',
                                export_tokens: !1,
                                snippet_id: 'groovy',
                                syntax: 'text/x-groovy'
                            },
                            {
                                label: 'Handlebars',
                                export_tokens: !1,
                                snippet_id: 'handlebars',
                                syntax: 'text/x-handlebars-template'
                            },
                            {
                                label: 'HTML',
                                export_tokens: !1,
                                snippet_id: 'html',
                                syntax: 'text/html'
                            },
                            {
                                label: 'Android (Java)',
                                export_tokens: !0,
                                snippet_id: 'java',
                                syntax: 'text/x-java',
                                'ext-com_adobe_xd-styledictionary_id': 'android'
                            },
                            {
                                label: 'JavaScript',
                                export_tokens: !0,
                                snippet_id: 'javascript',
                                syntax: 'text/javascript',
                                'ext-com_adobe_xd-styledictionary_id': 'js'
                            },
                            {
                                label: 'JavaScript React',
                                export_tokens: !1,
                                snippet_id: 'javascriptreact',
                                syntax: 'text/jsx'
                            },
                            {
                                label: 'Less',
                                export_tokens: !1,
                                snippet_id: 'less',
                                syntax: 'text/x-less'
                            },
                            {
                                label: 'Lua',
                                export_tokens: !1,
                                snippet_id: 'lua',
                                syntax: 'text/x-lua'
                            },
                            {
                                label: 'iOS (Objective-C)',
                                export_tokens: !1,
                                snippet_id: 'objective-c',
                                syntax: 'text/x-objectivec',
                                'ext-com_adobe_xd-styledictionary_id': 'ios'
                            },
                            {
                                label: 'Objective-C++',
                                export_tokens: !1,
                                snippet_id: 'objective-cpp',
                                syntax: 'text/x-c++src'
                            },
                            {
                                label: 'Pug',
                                export_tokens: !1,
                                snippet_id: 'jade',
                                syntax: 'text/html'
                            },
                            {
                                label: 'Python',
                                export_tokens: !1,
                                snippet_id: 'python',
                                syntax: 'text/x-python'
                            },
                            {
                                label: 'Razor (cshtml)',
                                export_tokens: !1,
                                snippet_id: 'razor',
                                syntax: 'text/x-csharp'
                            },
                            {
                                label: 'Ruby',
                                export_tokens: !1,
                                snippet_id: 'ruby',
                                syntax: 'text/x-ruby'
                            },
                            {
                                label: 'Rust',
                                export_tokens: !1,
                                snippet_id: 'rust',
                                syntax: 'text/x-rustsrc'
                            },
                            {
                                label: 'SCSS',
                                export_tokens: !0,
                                snippet_id: 'scss',
                                syntax: 'text/x-sass',
                                'ext-com_adobe_xd-styledictionary_id': 'scss'
                            },
                            {
                                label: 'SASS',
                                export_tokens: !1,
                                snippet_id: 'sass',
                                syntax: 'text/x-sass'
                            },
                            {
                                label: 'ShaderLab',
                                export_tokens: !1,
                                snippet_id: 'shaderlab',
                                syntax: 'text/x-vertex'
                            },
                            {
                                label: 'iOS (Swift)',
                                export_tokens: !0,
                                snippet_id: 'swift',
                                syntax: 'text/x-swift',
                                'ext-com_adobe_xd-styledictionary_id': 'ios-swift'
                            },
                            {
                                label: 'TypeScript',
                                export_tokens: !1,
                                snippet_id: 'typescript',
                                syntax: 'text/typescript'
                            },
                            {
                                label: 'TypeScript React',
                                export_tokens: !1,
                                snippet_id: 'typescriptreact',
                                syntax: 'text/typescript-jsx'
                            },
                            {
                                label: 'Markdown',
                                export_tokens: !1,
                                snippet_id: 'markdown',
                                syntax: 'text/x-markdown'
                            }
                        ]
                    },
                    import: [
                        { src: 'data/tokens.json' },
                        { src: 'data/fonts.json' },
                        { src: 'data/components.json' },
                        { src: 'data/docs.json' }
                    ]
                }, null, 2),
                mimeType: 'application/json'
            },
            JSCompiler_StaticMethods_generateTokens(this, JSCompiler_inline_result),
            JSCompiler_StaticMethods_generateComponents(this, JSCompiler_inline_result),
            JSCompiler_StaticMethods_generateDocs(this, JSCompiler_inline_result),
            JSCompiler_StaticMethods_generateFonts(this, JSCompiler_inline_result)
        ];
    }
};