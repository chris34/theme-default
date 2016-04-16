.. highlight:: html+jinja

===============
Macro overview
===============

Breadcrumb
==========

Sidebar
=======

Forms
=====

To render forms, we use a set of macros. They are a compromise between
Django's functions like `form.as_p()` which dont really fit to
bootstrap and the possibility to do everything by hand – nobody wants to
do this time consuming work in practice. However with the macros you
can still need only one line of code to render a full form in the template:

  .. code::
    {{ macros.outer_form(csrf_token(), form) }}

(The passed csrf_token is neccessary everytime you use outer_form –
otherwise the csrf_token would be invalid in the context of the macro)
This will give us a complete HTML-form, as the fields and their types
are already defined in the corresponding forms.py. For an example see the
`model <https://github.com/inyokaproject/inyoka/blob/staging/inyoka/portal/forms.py#L72-L77>`_
and the corresponding `template
<https://github.com/inyokaproject/theme-default/blob/staging/inyoka_theme_default/templates/portal/login.html>`_
for the login.

% TODO picutre
% .. image:: images/ball1.gif

You will have noticed, that the label of the submit-button
is changed from the default `Submit` to `Sign in`. This can be achvied
by changing the `submit_label` parameter. You could
have also noticed that the fields appear in the same order as in the
forms.py. To change the order, `inner_form` can be used inside
the call. To , the template would look like this:

  .. code::

  {% call macros.outer_form(csrf_token(), form) %}
    {{ macros.inner_form(['password', 'username']) }}
  {% endcall %}

Als note that the checkbox for a permanent login wont be rendered at
all. For adding another button beside the Submit-button, just write a
normal html-markup at the end of the call. Thus, it will be inserted
before the Submit-button. A use-case is for instance a Cancel-button
in a dialoge like found in `pastebin/delete_entry
<https://github.com/inyokaproject/theme-default/blob/staging/inyoka_theme_default/templates/pastebin/delete_entry.html#L21>`.
