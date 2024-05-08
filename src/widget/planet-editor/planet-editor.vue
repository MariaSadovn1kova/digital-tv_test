<script setup lang="ts">
import { onMounted, onUnmounted, ref} from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

const planetEditor = ref();

onMounted(() => {
  planetEditor.value = new Editor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Введите текст…',
      }),
    ],
    onUpdate: () => {
      emit('update:modelValue', planetEditor.value.getHTML())
    },
  })
})

onUnmounted(() => {
  planetEditor.value.destroy();
})
</script>

<template>
  <div 
    v-if="planetEditor"
    class="editor"
  >
    <button 
      @click="planetEditor.chain().focus().toggleItalic().run()" 
      :disabled="!planetEditor.can().chain().focus().toggleItalic().run()" 
      :class="{ 'is-active': planetEditor.isActive('italic') }"
      class="editor__button"
    >
      italic
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleStrike().run()" 
      :disabled="!planetEditor.can().chain().focus().toggleStrike().run()"
      :class="{ 'is-active': planetEditor.isActive('strike') }"
      class="editor__button"
      >
      strike
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleCode().run()" 
      :disabled="!planetEditor.can().chain().focus().toggleCode().run()" 
      :class="{ 'is-active': planetEditor.isActive('code') }"
      class="editor__button"
    >
      code
    </button>
    <button 
      @click="planetEditor.chain().focus().setParagraph().run()" 
      :class="{ 'is-active': planetEditor.isActive('paragraph') }"
      class="editor__button"
    >
      p
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleHeading({ level: 1 }).run()" 
      :class="{ 'is-active': planetEditor.isActive('heading', { level: 1 }) }"
      class="editor__button"
    >
      h1
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleHeading({ level: 2 }).run()" 
      :class="{ 'is-active': planetEditor.isActive('heading', { level: 2 }) }"
      class="editor__button"
    >
      h2
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleHeading({ level: 3 }).run()" 
      :class="{ 'is-active': planetEditor.isActive('heading', { level: 3 }) }"
      class="editor__button"
    >
      h3
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleHeading({ level: 4 }).run()" 
      :class="{ 'is-active': planetEditor.isActive('heading', { level: 4 }) }"
      class="editor__button"
    >
      h4
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleHeading({ level: 5 }).run()" 
      :class="{ 'is-active': planetEditor.isActive('heading', { level: 5 }) }"
      class="editor__button"
    >
      h5
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleHeading({ level: 6 }).run()" 
      :class="{ 'is-active': planetEditor.isActive('heading', { level: 6 }) }"
      class="editor__button"
    >
      h6
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleBulletList().run()" 
      :class="{ 'is-active': planetEditor.isActive('bulletList') }"
      class="editor__button"
    >
      bullet list
    </button>
    <button 
      @click="planetEditor.chain().focus().toggleOrderedList().run()" 
      :class="{ 'is-active': planetEditor.isActive('orderedList') }"
      class="editor__button"
    >
      ordered list
    </button>
  </div>
  <EditorContent :editor="planetEditor" />
</template>

<style lang="postcss">
  @import './planet-editor.pcss';
</style>