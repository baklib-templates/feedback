import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"]
  static values = {
    url: String
  }

  openDialog() {
    const url = this.urlValue
    if (!url) return;

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const toolbar = doc.querySelector('div[x-ref="toolbar"]');
        if (toolbar) {
          const editor = doc.querySelector('div.editor.editing');
          if (editor) {
            editor.appendChild(toolbar);
          }
        }

        const modal = document.querySelector("#headlessui-dialog");
        if (!modal) return;

        const header = doc.querySelector('header');
        if (header) {
          header.remove();
        }
        const dialog_content = doc.querySelector('#dialog_content');
        modal.className = 'fixed inset-0 z-[200] custom-scrollbar-stronger overflow-y-auto overflow-x-hidden';
        modal.removeAttribute('hidden');
        if (dialog_content) {
          modal.innerHTML = buildDialog(dialog_content.innerHTML);
        } else {
          modal.innerHTML = buildDialog(doc.body.innerHTML);
        }
        document.body.classList.add('overflow-hidden');

        modal.querySelectorAll('[data-action="click->dialog-fetch#closeDialog"]').forEach(btn => {
          btn.onclick = () => this.closeDialogElement(modal);
        });
      })
      .catch(error => console.error("Error loading dialog content:", error));
  }

  closeDialog(event) {
    const modal = this.modalTarget || event?.target?.closest('#headlessui-dialog') || document.querySelector('#headlessui-dialog');
    if (modal) {
      this.closeDialogElement(modal);
    }
  }

  closeDialogElement(modal) {
    modal.className = 'fixed inset-0 z-[200] hidden overflow-y-auto overflow-x-hidden';
    modal.innerHTML = "";
    document.body.classList.remove('overflow-hidden');
  }
}

function buildDialog(content) {
  return `
  <div class="relative min-h-screen">
    <div class="flex min-h-screen w-full sm:items-start sm:justify-center sm:px-4 sm:pt-12 sm:pb-16">
      <div
        class="absolute inset-0 bg-base-content/50 backdrop-blur-sm main-transition"
        data-action="click->dialog-fetch#closeDialog"
        aria-hidden="true"
      ></div>
      <div class="pointer-events-none fixed top-1 right-1 z-[210] hidden sm:block md:right-4 md:top-4">
        <button
          type="button"
          class="pointer-events-auto cursor-pointer rounded-lg border border-base-300 bg-base-100 p-1.5 shadow-sm transition hover:bg-base-200 main-transition"
          data-action="click->dialog-fetch#closeDialog"
          tabindex="-1"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 secondary-svg">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="relative z-[210] mx-0 my-0 w-full max-w-5xl scale-100 bg-base-100 opacity-100 shadow-2xl transition-transform ease-in-out sm:mx-8 sm:my-10 sm:rounded-box 2xl:mx-0">
        <div class="mb-10 sm:hidden">
          <button
            type="button"
            class="fixed left-4 top-4 z-[210] border border-base-300 bg-base-200 p-1.5 text-[11px] uppercase tracking-wide"
            data-action="click->dialog-fetch#closeDialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div class="mx-auto min-w-0 max-w-7xl">
          <div class="relative">
            <div class="h-full max-w-5xl">
              ${content}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}
