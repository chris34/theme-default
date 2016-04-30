.. highlight:: html+jinja

==============
Macro overview
==============

Note: extends and imports
=========================

Before diving into the macros a quick note, where importing the macros-file is a must-have: The
`macros.html`-file is imported in the `base.html` via

.. code::

  {% import 'macros.html' as macros %}

Thus, if you extend to `base.html` – even just indirectional – all macros will be accessible
behind `macros.<my_name_to_use>`. It's unnecessary to import them in every new template.

Nevertheless, there exists one exception: If you don't extend to `base.html` and want to use
macros, write the above import after the license-header. (See for instance `planet/hide_entry.html
 <https://github.com/inyokaproject/theme-default/blob/staging/inyoka_theme_default/templates/planet/hide_entry.html>`)

Breadcrumb
==========

The first

Sidebar
=======

Forms
=====

To render forms, we use a set of macros. They are a compromise between
`Django's bultins <https://docs.djangoproject.com/en/dev/topics/forms/#form-rendering-options>`_
like `form.as_p()` and doing everything by hand. An argument against using Djangos bultins is:
The created markup doesn't really fit to bootstrap. Moreover, nobody wants to do everything by
hand, as it is very time consuming. However, with the included macros it's still possible to
render a full form with one line of code:

.. code::

    {{ macros.outer_form(csrf_token(), form) }}

(The passed `csrf <https://docs.djangoproject.com/en/dev/ref/csrf/>`_-token is necessary everytime you use outer_form –
otherwise the csrf_token would be invalid in the context of the macro)
This will give us a complete HTML-form, as the fields and their types
are already defined in the corresponding forms.py. For an simple example see the
`model <https://github.com/inyokaproject/inyoka/blob/staging/inyoka/portal/forms.py#L72-L77>`_
and the corresponding
`template <https://github.com/inyokaproject/theme-default/blob/staging/inyoka_theme_default/templates/portal/login.html>`_
for the login.

.. TODO picutre
.. .. image:: images/ball1.gif

Possibly, you will have noticed, that the label of the submit-button
is changed from the default `Submit` to `Sign in`. This can be achieved
by changing the `submit_label` parameter.

You could have also noticed that the fields appear in the same order as in the
forms.py. To change the order, `inner_form` can be used inside
the call. If the password-field should be the first one rendered, the template would look like this:

.. code::

  {% call macros.outer_form(csrf_token(), form) %}
    <h2>The great login form</h2>

    {{ macros.inner_form(['password', 'username']) }}
  {% endcall %}

Also note that the checkbox for a permanent login wont be rendered in this example at
all, as it is ommitted in `inner_form`.

For adding another button beside the Submit-button, just write the
normal html-markup at the end of the call. Thus, it will be inserted
before the submit-button. A use-case is for instance a cancel-button
in a dialoge found in `pastebin/delete_entry
<https://github.com/inyokaproject/theme-default/blob/staging/inyoka_theme_default/templates/pastebin/delete_entry.html#L21>`_.
